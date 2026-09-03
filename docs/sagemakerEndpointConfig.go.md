# `sagemakerEndpointConfig` Submodule <a name="`sagemakerEndpointConfig` Submodule" id="@cdktn/provider-awscc.sagemakerEndpointConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpointConfigA <a name="SagemakerEndpointConfigA" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigA(scope Construct, id *string, config SagemakerEndpointConfigAConfig) SagemakerEndpointConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig">SagemakerEndpointConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig">SagemakerEndpointConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putAsyncInferenceConfig">PutAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putDataCaptureConfig">PutDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putExplainerConfig">PutExplainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putProductionVariants">PutProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putShadowProductionVariants">PutShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetAsyncInferenceConfig">ResetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetDataCaptureConfig">ResetDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetEndpointConfigName">ResetEndpointConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetExplainerConfig">ResetExplainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetShadowProductionVariants">ResetShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAsyncInferenceConfig` <a name="PutAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putAsyncInferenceConfig"></a>

```go
func PutAsyncInferenceConfig(value SagemakerEndpointConfigAsyncInferenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig">SagemakerEndpointConfigAsyncInferenceConfig</a>

---

##### `PutDataCaptureConfig` <a name="PutDataCaptureConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putDataCaptureConfig"></a>

```go
func PutDataCaptureConfig(value SagemakerEndpointConfigDataCaptureConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putDataCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig">SagemakerEndpointConfigDataCaptureConfig</a>

---

##### `PutExplainerConfig` <a name="PutExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putExplainerConfig"></a>

```go
func PutExplainerConfig(value SagemakerEndpointConfigExplainerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putExplainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig">SagemakerEndpointConfigExplainerConfig</a>

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putMetricsConfig"></a>

```go
func PutMetricsConfig(value SagemakerEndpointConfigMetricsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig">SagemakerEndpointConfigMetricsConfig</a>

---

##### `PutProductionVariants` <a name="PutProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putProductionVariants"></a>

```go
func PutProductionVariants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putProductionVariants.parameter.value"></a>

- *Type:* interface{}

---

##### `PutShadowProductionVariants` <a name="PutShadowProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putShadowProductionVariants"></a>

```go
func PutShadowProductionVariants(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putShadowProductionVariants.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerEndpointConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig">SagemakerEndpointConfigVpcConfig</a>

---

##### `ResetAsyncInferenceConfig` <a name="ResetAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetAsyncInferenceConfig"></a>

```go
func ResetAsyncInferenceConfig()
```

##### `ResetDataCaptureConfig` <a name="ResetDataCaptureConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetDataCaptureConfig"></a>

```go
func ResetDataCaptureConfig()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetEndpointConfigName` <a name="ResetEndpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetEndpointConfigName"></a>

```go
func ResetEndpointConfigName()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetExplainerConfig` <a name="ResetExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetExplainerConfig"></a>

```go
func ResetExplainerConfig()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetMetricsConfig"></a>

```go
func ResetMetricsConfig()
```

##### `ResetShadowProductionVariants` <a name="ResetShadowProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetShadowProductionVariants"></a>

```go
func ResetShadowProductionVariants()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.SagemakerEndpointConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.SagemakerEndpointConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.SagemakerEndpointConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.SagemakerEndpointConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerEndpointConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerEndpointConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerEndpointConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dataCaptureConfig">DataCaptureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference">SagemakerEndpointConfigDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigArn">EndpointConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.explainerConfig">ExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference">SagemakerEndpointConfigExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference">SagemakerEndpointConfigMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.productionVariants">ProductionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList">SagemakerEndpointConfigProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.shadowProductionVariants">ShadowProductionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList">SagemakerEndpointConfigShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList">SagemakerEndpointConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference">SagemakerEndpointConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.asyncInferenceConfigInput">AsyncInferenceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dataCaptureConfigInput">DataCaptureConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigNameInput">EndpointConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.explainerConfigInput">ExplainerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.productionVariantsInput">ProductionVariantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.shadowProductionVariantsInput">ShadowProductionVariantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigName">EndpointConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.asyncInferenceConfig"></a>

```go
func AsyncInferenceConfig() SagemakerEndpointConfigAsyncInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputReference</a>

---

##### `DataCaptureConfig`<sup>Required</sup> <a name="DataCaptureConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dataCaptureConfig"></a>

```go
func DataCaptureConfig() SagemakerEndpointConfigDataCaptureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference">SagemakerEndpointConfigDataCaptureConfigOutputReference</a>

---

##### `EndpointConfigArn`<sup>Required</sup> <a name="EndpointConfigArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigArn"></a>

```go
func EndpointConfigArn() *string
```

- *Type:* *string

---

##### `ExplainerConfig`<sup>Required</sup> <a name="ExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.explainerConfig"></a>

```go
func ExplainerConfig() SagemakerEndpointConfigExplainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference">SagemakerEndpointConfigExplainerConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.metricsConfig"></a>

```go
func MetricsConfig() SagemakerEndpointConfigMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference">SagemakerEndpointConfigMetricsConfigOutputReference</a>

---

##### `ProductionVariants`<sup>Required</sup> <a name="ProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.productionVariants"></a>

```go
func ProductionVariants() SagemakerEndpointConfigProductionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList">SagemakerEndpointConfigProductionVariantsList</a>

---

##### `ShadowProductionVariants`<sup>Required</sup> <a name="ShadowProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.shadowProductionVariants"></a>

```go
func ShadowProductionVariants() SagemakerEndpointConfigShadowProductionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList">SagemakerEndpointConfigShadowProductionVariantsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tags"></a>

```go
func Tags() SagemakerEndpointConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList">SagemakerEndpointConfigTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerEndpointConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference">SagemakerEndpointConfigVpcConfigOutputReference</a>

---

##### `AsyncInferenceConfigInput`<sup>Optional</sup> <a name="AsyncInferenceConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.asyncInferenceConfigInput"></a>

```go
func AsyncInferenceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataCaptureConfigInput`<sup>Optional</sup> <a name="DataCaptureConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.dataCaptureConfigInput"></a>

```go
func DataCaptureConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointConfigNameInput`<sup>Optional</sup> <a name="EndpointConfigNameInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigNameInput"></a>

```go
func EndpointConfigNameInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `ExplainerConfigInput`<sup>Optional</sup> <a name="ExplainerConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.explainerConfigInput"></a>

```go
func ExplainerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.metricsConfigInput"></a>

```go
func MetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProductionVariantsInput`<sup>Optional</sup> <a name="ProductionVariantsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.productionVariantsInput"></a>

```go
func ProductionVariantsInput() interface{}
```

- *Type:* interface{}

---

##### `ShadowProductionVariantsInput`<sup>Optional</sup> <a name="ShadowProductionVariantsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.shadowProductionVariantsInput"></a>

```go
func ShadowProductionVariantsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `EndpointConfigName`<sup>Required</sup> <a name="EndpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.endpointConfigName"></a>

```go
func EndpointConfigName() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfigAConfig <a name="SagemakerEndpointConfigAConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProductionVariants: interface{},
	AsyncInferenceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig,
	DataCaptureConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig,
	EnableNetworkIsolation: interface{},
	EndpointConfigName: *string,
	ExecutionRoleArn: *string,
	ExplainerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig,
	KmsKeyId: *string,
	MetricsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig,
	ShadowProductionVariants: interface{},
	Tags: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.productionVariants">ProductionVariants</a></code> | <code>interface{}</code> | A list of ProductionVariant objects, one for each model that you want to host at this endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig">SagemakerEndpointConfigAsyncInferenceConfig</a></code> | Specifies configuration for how an endpoint performs asynchronous inference. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.dataCaptureConfig">DataCaptureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig">SagemakerEndpointConfigDataCaptureConfig</a></code> | Specifies how to capture endpoint data for model monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Sets whether all model containers deployed to the endpoint are isolated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.endpointConfigName">EndpointConfigName</a></code> | <code>*string</code> | The name of the endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.explainerConfig">ExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig">SagemakerEndpointConfigExplainerConfig</a></code> | A parameter to activate explainers. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig">SagemakerEndpointConfigMetricsConfig</a></code> | Specifies the metrics that the endpoint publishes to Amazon CloudWatch, the frequency of publication, and whether to enable enhanced or detailed observability metrics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.shadowProductionVariants">ShadowProductionVariants</a></code> | <code>interface{}</code> | Array of ProductionVariant objects. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig">SagemakerEndpointConfigVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProductionVariants`<sup>Required</sup> <a name="ProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.productionVariants"></a>

```go
ProductionVariants interface{}
```

- *Type:* interface{}

A list of ProductionVariant objects, one for each model that you want to host at this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#production_variants SagemakerEndpointConfigA#production_variants}

---

##### `AsyncInferenceConfig`<sup>Optional</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.asyncInferenceConfig"></a>

```go
AsyncInferenceConfig SagemakerEndpointConfigAsyncInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig">SagemakerEndpointConfigAsyncInferenceConfig</a>

Specifies configuration for how an endpoint performs asynchronous inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#async_inference_config SagemakerEndpointConfigA#async_inference_config}

---

##### `DataCaptureConfig`<sup>Optional</sup> <a name="DataCaptureConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.dataCaptureConfig"></a>

```go
DataCaptureConfig SagemakerEndpointConfigDataCaptureConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig">SagemakerEndpointConfigDataCaptureConfig</a>

Specifies how to capture endpoint data for model monitor.

The data capture configuration applies to all production variants hosted at the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#data_capture_config SagemakerEndpointConfigA#data_capture_config}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Sets whether all model containers deployed to the endpoint are isolated.

If they are, no inbound or outbound network calls can be made to or from the model containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_network_isolation SagemakerEndpointConfigA#enable_network_isolation}

---

##### `EndpointConfigName`<sup>Optional</sup> <a name="EndpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.endpointConfigName"></a>

```go
EndpointConfigName *string
```

- *Type:* *string

The name of the endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#endpoint_config_name SagemakerEndpointConfigA#endpoint_config_name}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#execution_role_arn SagemakerEndpointConfigA#execution_role_arn}

---

##### `ExplainerConfig`<sup>Optional</sup> <a name="ExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.explainerConfig"></a>

```go
ExplainerConfig SagemakerEndpointConfigExplainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig">SagemakerEndpointConfigExplainerConfig</a>

A parameter to activate explainers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#explainer_config SagemakerEndpointConfigA#explainer_config}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#kms_key_id SagemakerEndpointConfigA#kms_key_id}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.metricsConfig"></a>

```go
MetricsConfig SagemakerEndpointConfigMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig">SagemakerEndpointConfigMetricsConfig</a>

Specifies the metrics that the endpoint publishes to Amazon CloudWatch, the frequency of publication, and whether to enable enhanced or detailed observability metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#metrics_config SagemakerEndpointConfigA#metrics_config}

---

##### `ShadowProductionVariants`<sup>Optional</sup> <a name="ShadowProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.shadowProductionVariants"></a>

```go
ShadowProductionVariants interface{}
```

- *Type:* interface{}

Array of ProductionVariant objects.

There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#shadow_production_variants SagemakerEndpointConfigA#shadow_production_variants}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#tags SagemakerEndpointConfigA#tags}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerEndpointConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig">SagemakerEndpointConfigVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#vpc_config SagemakerEndpointConfigA#vpc_config}

---

### SagemakerEndpointConfigAsyncInferenceConfig <a name="SagemakerEndpointConfigAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigAsyncInferenceConfig {
	ClientConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig,
	OutputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig">SagemakerEndpointConfigAsyncInferenceConfigClientConfig</a></code> | Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a></code> | Specifies the configuration for asynchronous inference invocation outputs. |

---

##### `ClientConfig`<sup>Optional</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig.property.clientConfig"></a>

```go
ClientConfig SagemakerEndpointConfigAsyncInferenceConfigClientConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig">SagemakerEndpointConfigAsyncInferenceConfigClientConfig</a>

Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#client_config SagemakerEndpointConfigA#client_config}

---

##### `OutputConfig`<sup>Optional</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfig.property.outputConfig"></a>

```go
OutputConfig SagemakerEndpointConfigAsyncInferenceConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a>

Specifies the configuration for asynchronous inference invocation outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#output_config SagemakerEndpointConfigA#output_config}

---

### SagemakerEndpointConfigAsyncInferenceConfigClientConfig <a name="SagemakerEndpointConfigAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig {
	MaxConcurrentInvocationsPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance">MaxConcurrentInvocationsPerInstance</a></code> | <code>*f64</code> | The maximum number of concurrent requests sent by the SageMaker client to the model container. |

---

##### `MaxConcurrentInvocationsPerInstance`<sup>Optional</sup> <a name="MaxConcurrentInvocationsPerInstance" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance"></a>

```go
MaxConcurrentInvocationsPerInstance *f64
```

- *Type:* *f64

The maximum number of concurrent requests sent by the SageMaker client to the model container.

If no value is provided, SageMaker will choose an optimal value for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_concurrent_invocations_per_instance SagemakerEndpointConfigA#max_concurrent_invocations_per_instance}

---

### SagemakerEndpointConfigAsyncInferenceConfigOutputConfig <a name="SagemakerEndpointConfigAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig {
	KmsKeyId: *string,
	NotificationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig,
	S3FailurePath: *string,
	S3OutputPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | Specifies the configuration for notifications of inference results for asynchronous inference. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.s3FailurePath">S3FailurePath</a></code> | <code>*string</code> | The Amazon S3 location to upload failure inference responses to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | The Amazon S3 location to upload inference responses to. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#kms_key_id SagemakerEndpointConfigA#kms_key_id}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```go
NotificationConfig SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a>

Specifies the configuration for notifications of inference results for asynchronous inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#notification_config SagemakerEndpointConfigA#notification_config}

---

##### `S3FailurePath`<sup>Optional</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.s3FailurePath"></a>

```go
S3FailurePath *string
```

- *Type:* *string

The Amazon S3 location to upload failure inference responses to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#s3_failure_path SagemakerEndpointConfigA#s3_failure_path}

---

##### `S3OutputPath`<sup>Optional</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```go
S3OutputPath *string
```

- *Type:* *string

The Amazon S3 location to upload inference responses to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#s3_output_path SagemakerEndpointConfigA#s3_output_path}

---

### SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig {
	ErrorTopic: *string,
	IncludeInferenceResponseIn: *[]*string,
	SuccessTopic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">ErrorTopic</a></code> | <code>*string</code> | Amazon SNS topic to post a notification to when an inference fails. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.includeInferenceResponseIn">IncludeInferenceResponseIn</a></code> | <code>*[]*string</code> | The Amazon SNS topics where you want the inference response to be included. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">SuccessTopic</a></code> | <code>*string</code> | Amazon SNS topic to post a notification to when an inference completes successfully. |

---

##### `ErrorTopic`<sup>Optional</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```go
ErrorTopic *string
```

- *Type:* *string

Amazon SNS topic to post a notification to when an inference fails.

If no topic is provided, no notification is sent on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#error_topic SagemakerEndpointConfigA#error_topic}

---

##### `IncludeInferenceResponseIn`<sup>Optional</sup> <a name="IncludeInferenceResponseIn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.includeInferenceResponseIn"></a>

```go
IncludeInferenceResponseIn *[]*string
```

- *Type:* *[]*string

The Amazon SNS topics where you want the inference response to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#include_inference_response_in SagemakerEndpointConfigA#include_inference_response_in}

---

##### `SuccessTopic`<sup>Optional</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```go
SuccessTopic *string
```

- *Type:* *string

Amazon SNS topic to post a notification to when an inference completes successfully.

If no topic is provided, no notification is sent on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#success_topic SagemakerEndpointConfigA#success_topic}

---

### SagemakerEndpointConfigDataCaptureConfig <a name="SagemakerEndpointConfigDataCaptureConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigDataCaptureConfig {
	CaptureContentTypeHeader: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader,
	CaptureOptions: interface{},
	DestinationS3Uri: *string,
	EnableCapture: interface{},
	InitialSamplingPercentage: *f64,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.captureContentTypeHeader">CaptureContentTypeHeader</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a></code> | A list of the JSON and CSV content type that the endpoint captures. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.captureOptions">CaptureOptions</a></code> | <code>interface{}</code> | Specifies whether the endpoint captures input data to your model, output data from your model, or both. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | The S3 bucket where model monitor stores captured data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.enableCapture">EnableCapture</a></code> | <code>interface{}</code> | Set to True to enable data capture. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.initialSamplingPercentage">InitialSamplingPercentage</a></code> | <code>*f64</code> | The percentage of data to capture. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption. |

---

##### `CaptureContentTypeHeader`<sup>Optional</sup> <a name="CaptureContentTypeHeader" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.captureContentTypeHeader"></a>

```go
CaptureContentTypeHeader SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a>

A list of the JSON and CSV content type that the endpoint captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capture_content_type_header SagemakerEndpointConfigA#capture_content_type_header}

---

##### `CaptureOptions`<sup>Optional</sup> <a name="CaptureOptions" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.captureOptions"></a>

```go
CaptureOptions interface{}
```

- *Type:* interface{}

Specifies whether the endpoint captures input data to your model, output data from your model, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capture_options SagemakerEndpointConfigA#capture_options}

---

##### `DestinationS3Uri`<sup>Optional</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.destinationS3Uri"></a>

```go
DestinationS3Uri *string
```

- *Type:* *string

The S3 bucket where model monitor stores captured data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri SagemakerEndpointConfigA#destination_s3_uri}

---

##### `EnableCapture`<sup>Optional</sup> <a name="EnableCapture" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.enableCapture"></a>

```go
EnableCapture interface{}
```

- *Type:* interface{}

Set to True to enable data capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_capture SagemakerEndpointConfigA#enable_capture}

---

##### `InitialSamplingPercentage`<sup>Optional</sup> <a name="InitialSamplingPercentage" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.initialSamplingPercentage"></a>

```go
InitialSamplingPercentage *f64
```

- *Type:* *f64

The percentage of data to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#initial_sampling_percentage SagemakerEndpointConfigA#initial_sampling_percentage}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#kms_key_id SagemakerEndpointConfigA#kms_key_id}

---

### SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader <a name="SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader {
	CsvContentTypes: *[]*string,
	JsonContentTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes">CsvContentTypes</a></code> | <code>*[]*string</code> | A list of the CSV content types of the data that the endpoint captures. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes">JsonContentTypes</a></code> | <code>*[]*string</code> | A list of the JSON content types of the data that the endpoint captures. |

---

##### `CsvContentTypes`<sup>Optional</sup> <a name="CsvContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes"></a>

```go
CsvContentTypes *[]*string
```

- *Type:* *[]*string

A list of the CSV content types of the data that the endpoint captures.

For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#csv_content_types SagemakerEndpointConfigA#csv_content_types}

---

##### `JsonContentTypes`<sup>Optional</sup> <a name="JsonContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes"></a>

```go
JsonContentTypes *[]*string
```

- *Type:* *[]*string

A list of the JSON content types of the data that the endpoint captures.

For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#json_content_types SagemakerEndpointConfigA#json_content_types}

---

### SagemakerEndpointConfigDataCaptureConfigCaptureOptions <a name="SagemakerEndpointConfigDataCaptureConfigCaptureOptions" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptions {
	CaptureMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptions.property.captureMode">CaptureMode</a></code> | <code>*string</code> | Specifies whether the endpoint captures input data or output data. |

---

##### `CaptureMode`<sup>Optional</sup> <a name="CaptureMode" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptions.property.captureMode"></a>

```go
CaptureMode *string
```

- *Type:* *string

Specifies whether the endpoint captures input data or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capture_mode SagemakerEndpointConfigA#capture_mode}

---

### SagemakerEndpointConfigExplainerConfig <a name="SagemakerEndpointConfigExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfig {
	ClarifyExplainerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig.property.clarifyExplainerConfig">ClarifyExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a></code> | A member of ExplainerConfig that contains configuration parameters for the SageMaker Clarify explainer. |

---

##### `ClarifyExplainerConfig`<sup>Optional</sup> <a name="ClarifyExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfig.property.clarifyExplainerConfig"></a>

```go
ClarifyExplainerConfig SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a>

A member of ExplainerConfig that contains configuration parameters for the SageMaker Clarify explainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#clarify_explainer_config SagemakerEndpointConfigA#clarify_explainer_config}

---

### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig {
	EnableExplanations: *string,
	InferenceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig,
	ShapConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.enableExplanations">EnableExplanations</a></code> | <code>*string</code> | A JMESPath boolean expression used to filter which records to explain. Explanations are activated by default. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.inferenceConfig">InferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a></code> | The inference configuration parameter for the model container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.shapConfig">ShapConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a></code> | The configuration for SHAP analysis. |

---

##### `EnableExplanations`<sup>Optional</sup> <a name="EnableExplanations" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.enableExplanations"></a>

```go
EnableExplanations *string
```

- *Type:* *string

A JMESPath boolean expression used to filter which records to explain. Explanations are activated by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_explanations SagemakerEndpointConfigA#enable_explanations}

---

##### `InferenceConfig`<sup>Optional</sup> <a name="InferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.inferenceConfig"></a>

```go
InferenceConfig SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a>

The inference configuration parameter for the model container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#inference_config SagemakerEndpointConfigA#inference_config}

---

##### `ShapConfig`<sup>Optional</sup> <a name="ShapConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.property.shapConfig"></a>

```go
ShapConfig SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a>

The configuration for SHAP analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#shap_config SagemakerEndpointConfigA#shap_config}

---

### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig {
	ContentTemplate: *string,
	FeatureHeaders: *[]*string,
	FeaturesAttribute: *string,
	FeatureTypes: *[]*string,
	LabelAttribute: *string,
	LabelHeaders: *[]*string,
	LabelIndex: *f64,
	MaxPayloadInMb: *f64,
	MaxRecordCount: *f64,
	ProbabilityAttribute: *string,
	ProbabilityIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.contentTemplate">ContentTemplate</a></code> | <code>*string</code> | A template string used to format a JSON record into an acceptable model container input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featureHeaders">FeatureHeaders</a></code> | <code>*[]*string</code> | The names of the features. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | Provides the JMESPath expression to extract the features from a model container input in JSON Lines format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featureTypes">FeatureTypes</a></code> | <code>*[]*string</code> | A list of data types of the features (optional). |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelAttribute">LabelAttribute</a></code> | <code>*string</code> | A JMESPath expression used to locate the list of label headers in the model container output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelHeaders">LabelHeaders</a></code> | <code>*[]*string</code> | For multiclass classification problems, the label headers are the names of the classes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelIndex">LabelIndex</a></code> | <code>*f64</code> | A zero-based index used to extract a label header or list of label headers from model container output in CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.maxPayloadInMb">MaxPayloadInMb</a></code> | <code>*f64</code> | The maximum payload size (MB) allowed of a request from the explainer to the model container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.maxRecordCount">MaxRecordCount</a></code> | <code>*f64</code> | The maximum number of records in a request that the model container can process when querying the model container for the predictions of a synthetic dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.probabilityIndex">ProbabilityIndex</a></code> | <code>*f64</code> | A zero-based index used to extract a probability value (score) or list from model container output in CSV format. |

---

##### `ContentTemplate`<sup>Optional</sup> <a name="ContentTemplate" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.contentTemplate"></a>

```go
ContentTemplate *string
```

- *Type:* *string

A template string used to format a JSON record into an acceptable model container input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#content_template SagemakerEndpointConfigA#content_template}

---

##### `FeatureHeaders`<sup>Optional</sup> <a name="FeatureHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featureHeaders"></a>

```go
FeatureHeaders *[]*string
```

- *Type:* *[]*string

The names of the features.

If provided, these are included in the endpoint response payload to help readability of the InvokeEndpoint output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#feature_headers SagemakerEndpointConfigA#feature_headers}

---

##### `FeaturesAttribute`<sup>Optional</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featuresAttribute"></a>

```go
FeaturesAttribute *string
```

- *Type:* *string

Provides the JMESPath expression to extract the features from a model container input in JSON Lines format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#features_attribute SagemakerEndpointConfigA#features_attribute}

---

##### `FeatureTypes`<sup>Optional</sup> <a name="FeatureTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.featureTypes"></a>

```go
FeatureTypes *[]*string
```

- *Type:* *[]*string

A list of data types of the features (optional).

Applicable only to NLP explainability. If provided, FeatureTypes must have at least one 'text' string (for example, ['text']). If FeatureTypes is not provided, the explainer infers the feature types based on the baseline data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#feature_types SagemakerEndpointConfigA#feature_types}

---

##### `LabelAttribute`<sup>Optional</sup> <a name="LabelAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelAttribute"></a>

```go
LabelAttribute *string
```

- *Type:* *string

A JMESPath expression used to locate the list of label headers in the model container output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#label_attribute SagemakerEndpointConfigA#label_attribute}

---

##### `LabelHeaders`<sup>Optional</sup> <a name="LabelHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelHeaders"></a>

```go
LabelHeaders *[]*string
```

- *Type:* *[]*string

For multiclass classification problems, the label headers are the names of the classes.

Otherwise, the label header is the name of the predicted label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#label_headers SagemakerEndpointConfigA#label_headers}

---

##### `LabelIndex`<sup>Optional</sup> <a name="LabelIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.labelIndex"></a>

```go
LabelIndex *f64
```

- *Type:* *f64

A zero-based index used to extract a label header or list of label headers from model container output in CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#label_index SagemakerEndpointConfigA#label_index}

---

##### `MaxPayloadInMb`<sup>Optional</sup> <a name="MaxPayloadInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.maxPayloadInMb"></a>

```go
MaxPayloadInMb *f64
```

- *Type:* *f64

The maximum payload size (MB) allowed of a request from the explainer to the model container.

Defaults to 6 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_payload_in_mb SagemakerEndpointConfigA#max_payload_in_mb}

---

##### `MaxRecordCount`<sup>Optional</sup> <a name="MaxRecordCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.maxRecordCount"></a>

```go
MaxRecordCount *f64
```

- *Type:* *f64

The maximum number of records in a request that the model container can process when querying the model container for the predictions of a synthetic dataset.

A record is a unit of input data that inference can be made on, for example, a single line in CSV data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_record_count SagemakerEndpointConfigA#max_record_count}

---

##### `ProbabilityAttribute`<sup>Optional</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.probabilityAttribute"></a>

```go
ProbabilityAttribute *string
```

- *Type:* *string

A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#probability_attribute SagemakerEndpointConfigA#probability_attribute}

---

##### `ProbabilityIndex`<sup>Optional</sup> <a name="ProbabilityIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.property.probabilityIndex"></a>

```go
ProbabilityIndex *f64
```

- *Type:* *f64

A zero-based index used to extract a probability value (score) or list from model container output in CSV format.

If this value is not provided, the entire model container output will be treated as a probability value (score) or list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#probability_index SagemakerEndpointConfigA#probability_index}

---

### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig {
	NumberOfSamples: *f64,
	Seed: *f64,
	ShapBaselineConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig,
	TextConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig,
	UseLogit: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.numberOfSamples">NumberOfSamples</a></code> | <code>*f64</code> | The number of samples to be used for analysis by the Kernal SHAP algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.seed">Seed</a></code> | <code>*f64</code> | The starting value used to initialize the random number generator in the explainer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.shapBaselineConfig">ShapBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a></code> | The configuration for the SHAP baseline of the Kernal SHAP algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.textConfig">TextConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a></code> | A parameter that indicates if text features are treated as text and explanations are provided for individual units of text. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.useLogit">UseLogit</a></code> | <code>interface{}</code> | A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions. |

---

##### `NumberOfSamples`<sup>Optional</sup> <a name="NumberOfSamples" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.numberOfSamples"></a>

```go
NumberOfSamples *f64
```

- *Type:* *f64

The number of samples to be used for analysis by the Kernal SHAP algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#number_of_samples SagemakerEndpointConfigA#number_of_samples}

---

##### `Seed`<sup>Optional</sup> <a name="Seed" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.seed"></a>

```go
Seed *f64
```

- *Type:* *f64

The starting value used to initialize the random number generator in the explainer.

Provide a value for this parameter to obtain a deterministic SHAP result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#seed SagemakerEndpointConfigA#seed}

---

##### `ShapBaselineConfig`<sup>Optional</sup> <a name="ShapBaselineConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.shapBaselineConfig"></a>

```go
ShapBaselineConfig SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a>

The configuration for the SHAP baseline of the Kernal SHAP algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#shap_baseline_config SagemakerEndpointConfigA#shap_baseline_config}

---

##### `TextConfig`<sup>Optional</sup> <a name="TextConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.textConfig"></a>

```go
TextConfig SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a>

A parameter that indicates if text features are treated as text and explanations are provided for individual units of text.

Required for natural language processing (NLP) explainability only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#text_config SagemakerEndpointConfigA#text_config}

---

##### `UseLogit`<sup>Optional</sup> <a name="UseLogit" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.property.useLogit"></a>

```go
UseLogit interface{}
```

- *Type:* interface{}

A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#use_logit SagemakerEndpointConfigA#use_logit}

---

### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig {
	MimeType: *string,
	ShapBaseline: *string,
	ShapBaselineUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.mimeType">MimeType</a></code> | <code>*string</code> | The MIME type of the baseline data. Choose from 'text/csv' or 'application/jsonlines'. Defaults to 'text/csv'. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.shapBaseline">ShapBaseline</a></code> | <code>*string</code> | The inline SHAP baseline data in string format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.shapBaselineUri">ShapBaselineUri</a></code> | <code>*string</code> | The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored. |

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The MIME type of the baseline data. Choose from 'text/csv' or 'application/jsonlines'. Defaults to 'text/csv'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#mime_type SagemakerEndpointConfigA#mime_type}

---

##### `ShapBaseline`<sup>Optional</sup> <a name="ShapBaseline" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.shapBaseline"></a>

```go
ShapBaseline *string
```

- *Type:* *string

The inline SHAP baseline data in string format.

ShapBaseline can have one or multiple records to be used as the baseline dataset. The format of the SHAP baseline file should be the same format as the training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#shap_baseline SagemakerEndpointConfigA#shap_baseline}

---

##### `ShapBaselineUri`<sup>Optional</sup> <a name="ShapBaselineUri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.property.shapBaselineUri"></a>

```go
ShapBaselineUri *string
```

- *Type:* *string

The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored.

The format of the SHAP baseline file should be the same format as the format of the training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#shap_baseline_uri SagemakerEndpointConfigA#shap_baseline_uri}

---

### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig {
	Granularity: *string,
	Language: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.property.granularity">Granularity</a></code> | <code>*string</code> | The unit of granularity for the analysis of text features. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.property.language">Language</a></code> | <code>*string</code> | Specifies the language of the text features in ISO 639-1 or ISO 639-3 code of a supported language. |

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.property.granularity"></a>

```go
Granularity *string
```

- *Type:* *string

The unit of granularity for the analysis of text features.

For example, if the unit is 'token', then each token (like a word in English) of the text is treated as a feature. SHAP values are computed for each unit/feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#granularity SagemakerEndpointConfigA#granularity}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

Specifies the language of the text features in ISO 639-1 or ISO 639-3 code of a supported language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#language SagemakerEndpointConfigA#language}

---

### SagemakerEndpointConfigMetricsConfig <a name="SagemakerEndpointConfigMetricsConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigMetricsConfig {
	EnableDetailedObservability: interface{},
	EnableEnhancedMetrics: interface{},
	MetricPublishFrequencyInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.enableDetailedObservability">EnableDetailedObservability</a></code> | <code>interface{}</code> | Specifies whether to enable detailed observability for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.enableEnhancedMetrics">EnableEnhancedMetrics</a></code> | <code>interface{}</code> | Specifies whether to enable enhanced metrics for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | The interval, in seconds, at which the endpoint publishes metrics to Amazon CloudWatch. |

---

##### `EnableDetailedObservability`<sup>Optional</sup> <a name="EnableDetailedObservability" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.enableDetailedObservability"></a>

```go
EnableDetailedObservability interface{}
```

- *Type:* interface{}

Specifies whether to enable detailed observability for the endpoint.

When set to true, the endpoint publishes container-level inference metrics, per-GPU metrics, per-instance host metrics, and inference component placement metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_detailed_observability SagemakerEndpointConfigA#enable_detailed_observability}

---

##### `EnableEnhancedMetrics`<sup>Optional</sup> <a name="EnableEnhancedMetrics" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.enableEnhancedMetrics"></a>

```go
EnableEnhancedMetrics interface{}
```

- *Type:* interface{}

Specifies whether to enable enhanced metrics for the endpoint.

Enhanced metrics provide utilization and invocation data at instance and container granularity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_enhanced_metrics SagemakerEndpointConfigA#enable_enhanced_metrics}

---

##### `MetricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfig.property.metricPublishFrequencyInSeconds"></a>

```go
MetricPublishFrequencyInSeconds *f64
```

- *Type:* *f64

The interval, in seconds, at which the endpoint publishes metrics to Amazon CloudWatch.

Valid values are 10, 30, 60, 120, 180, 240, and 300. The default is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#metric_publish_frequency_in_seconds SagemakerEndpointConfigA#metric_publish_frequency_in_seconds}

---

### SagemakerEndpointConfigProductionVariants <a name="SagemakerEndpointConfigProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariants {
	VariantName: *string,
	CapacityReservationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig,
	ContainerStartupHealthCheckTimeoutInSeconds: *f64,
	CoreDumpConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig,
	EnableSsmAccess: interface{},
	InferenceAmiVersion: *string,
	InitialInstanceCount: *f64,
	InitialVariantWeight: *f64,
	InstancePools: interface{},
	InstanceType: *string,
	ManagedInstanceScaling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling,
	ModelDataDownloadTimeoutInSeconds: *f64,
	ModelName: *string,
	RoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig,
	ServerlessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig,
	VariantInstanceProvisionTimeoutInSeconds: *f64,
	VolumeSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.variantName">VariantName</a></code> | <code>*string</code> | The name of the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a></code> | Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig">SagemakerEndpointConfigProductionVariantsCoreDumpConfig</a></code> | Specifies configuration for a core dump from the model container when the process crashes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>interface{}</code> | You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>*string</code> | Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>*f64</code> | Number of instances to launch initially. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>*f64</code> | Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.instancePools">InstancePools</a></code> | <code>interface{}</code> | A list of instance pools for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a></code> | Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.modelName">ModelName</a></code> | <code>*string</code> | The name of the model that you want to host. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfig</a></code> | Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig">SagemakerEndpointConfigProductionVariantsServerlessConfig</a></code> | The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, for provisioning instances for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. |

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.variantName"></a>

```go
VariantName *string
```

- *Type:* *string

The name of the production variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#variant_name SagemakerEndpointConfigA#variant_name}

---

##### `CapacityReservationConfig`<sup>Optional</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.capacityReservationConfig"></a>

```go
CapacityReservationConfig SagemakerEndpointConfigProductionVariantsCapacityReservationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a>

Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_config SagemakerEndpointConfigA#capacity_reservation_config}

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
ContainerStartupHealthCheckTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfigA#container_startup_health_check_timeout_in_seconds}

---

##### `CoreDumpConfig`<sup>Optional</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.coreDumpConfig"></a>

```go
CoreDumpConfig SagemakerEndpointConfigProductionVariantsCoreDumpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig">SagemakerEndpointConfigProductionVariantsCoreDumpConfig</a>

Specifies configuration for a core dump from the model container when the process crashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#core_dump_config SagemakerEndpointConfigA#core_dump_config}

---

##### `EnableSsmAccess`<sup>Optional</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.enableSsmAccess"></a>

```go
EnableSsmAccess interface{}
```

- *Type:* interface{}

You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint.

By default, SSM access is disabled for all production variants behind an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_ssm_access SagemakerEndpointConfigA#enable_ssm_access}

---

##### `InferenceAmiVersion`<sup>Optional</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.inferenceAmiVersion"></a>

```go
InferenceAmiVersion *string
```

- *Type:* *string

Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images.

Each image is configured by AWS with a set of software and driver versions. AWS optimizes these configurations for different machine learning workloads. By selecting an AMI version, you can ensure that your inference environment is compatible with specific software requirements, such as CUDA driver versions, Linux kernel versions, or AWS Neuron driver versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#inference_ami_version SagemakerEndpointConfigA#inference_ami_version}

---

##### `InitialInstanceCount`<sup>Optional</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.initialInstanceCount"></a>

```go
InitialInstanceCount *f64
```

- *Type:* *f64

Number of instances to launch initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#initial_instance_count SagemakerEndpointConfigA#initial_instance_count}

---

##### `InitialVariantWeight`<sup>Optional</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.initialVariantWeight"></a>

```go
InitialVariantWeight *f64
```

- *Type:* *f64

Determines initial traffic distribution among all of the models that you specify in the endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#initial_variant_weight SagemakerEndpointConfigA#initial_variant_weight}

---

##### `InstancePools`<sup>Optional</sup> <a name="InstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.instancePools"></a>

```go
InstancePools interface{}
```

- *Type:* interface{}

A list of instance pools for the production variant.

Each instance pool specifies an instance type and its priority for provisioning. Use instance pools to configure heterogeneous endpoints that deploy models across multiple instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_pools SagemakerEndpointConfigA#instance_pools}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_type SagemakerEndpointConfigA#instance_type}

---

##### `ManagedInstanceScaling`<sup>Optional</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.managedInstanceScaling"></a>

```go
ManagedInstanceScaling SagemakerEndpointConfigProductionVariantsManagedInstanceScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a>

Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#managed_instance_scaling SagemakerEndpointConfigA#managed_instance_scaling}

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```go
ModelDataDownloadTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_data_download_timeout_in_seconds SagemakerEndpointConfigA#model_data_download_timeout_in_seconds}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

The name of the model that you want to host.

This is the name that you specified when creating the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_name SagemakerEndpointConfigA#model_name}

---

##### `RoutingConfig`<sup>Optional</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.routingConfig"></a>

```go
RoutingConfig SagemakerEndpointConfigProductionVariantsRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfig</a>

Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#routing_config SagemakerEndpointConfigA#routing_config}

---

##### `ServerlessConfig`<sup>Optional</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.serverlessConfig"></a>

```go
ServerlessConfig SagemakerEndpointConfigProductionVariantsServerlessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig">SagemakerEndpointConfigProductionVariantsServerlessConfig</a>

The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#serverless_config SagemakerEndpointConfigA#serverless_config}

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Optional</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.variantInstanceProvisionTimeoutInSeconds"></a>

```go
VariantInstanceProvisionTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, for provisioning instances for the production variant.

When SageMaker encounters an insufficient capacity error while provisioning instances, it retries with the next instance pool (if configured) or waits until the timeout expires. This timeout applies only to capacity provisioning and does not include the time for model download or container startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#variant_instance_provision_timeout_in_seconds SagemakerEndpointConfigA#variant_instance_provision_timeout_in_seconds}

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariants.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant.

Currently only Amazon EBS gp2 storage volumes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#volume_size_in_gb SagemakerEndpointConfigA#volume_size_in_gb}

---

### SagemakerEndpointConfigProductionVariantsCapacityReservationConfig <a name="SagemakerEndpointConfigProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig {
	CapacityReservationPreference: *string,
	MlReservationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Options that you can choose for the capacity reservation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig.property.mlReservationArn">MlReservationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Options that you can choose for the capacity reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_preference SagemakerEndpointConfigA#capacity_reservation_preference}

---

##### `MlReservationArn`<sup>Optional</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig.property.mlReservationArn"></a>

```go
MlReservationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#ml_reservation_arn SagemakerEndpointConfigA#ml_reservation_arn}

---

### SagemakerEndpointConfigProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig {
	DestinationS3Uri: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | The Amazon S3 bucket to send the core dump to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. |

---

##### `DestinationS3Uri`<sup>Optional</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```go
DestinationS3Uri *string
```

- *Type:* *string

The Amazon S3 bucket to send the core dump to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri SagemakerEndpointConfigA#destination_s3_uri}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption.

If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call kms:Encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#kms_key_id SagemakerEndpointConfigA#kms_key_id}

---

### SagemakerEndpointConfigProductionVariantsInstancePools <a name="SagemakerEndpointConfigProductionVariantsInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsInstancePools {
	InstanceType: *string,
	ModelNameOverride: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the instance pool. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.modelNameOverride">ModelNameOverride</a></code> | <code>*string</code> | The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.priority">Priority</a></code> | <code>*f64</code> | The priority for the instance pool. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the instance pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_type SagemakerEndpointConfigA#instance_type}

---

##### `ModelNameOverride`<sup>Optional</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.modelNameOverride"></a>

```go
ModelNameOverride *string
```

- *Type:* *string

The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant.

Use this to deploy a different model optimized for the instance type in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_name_override SagemakerEndpointConfigA#model_name_override}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePools.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority for the instance pool.

SageMaker attempts to provision instances in order of priority, starting with the lowest value. If instances for a higher-priority pool are unavailable, SageMaker attempts to provision from the next pool. Valid values: 1 to 5, where 1 is the highest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#priority SagemakerEndpointConfigA#priority}

---

### SagemakerEndpointConfigProductionVariantsManagedInstanceScaling <a name="SagemakerEndpointConfigProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling {
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
	ScaleInPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | Configures the scale-in behavior for managed instance scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.status">Status</a></code> | <code>*string</code> | Indicates whether managed instance scaling is enabled. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_instance_count SagemakerEndpointConfigA#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#min_instance_count SagemakerEndpointConfigA#min_instance_count}

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.scaleInPolicy"></a>

```go
ScaleInPolicy SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a>

Configures the scale-in behavior for managed instance scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#scale_in_policy SagemakerEndpointConfigA#scale_in_policy}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates whether managed instance scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#status SagemakerEndpointConfigA#status}

---

### SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy <a name="SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy {
	CooldownInMinutes: *f64,
	MaximumStepSize: *f64,
	Strategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>*f64</code> | The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.maximumStepSize">MaximumStepSize</a></code> | <code>*f64</code> | The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.strategy">Strategy</a></code> | <code>*string</code> | The strategy for scaling in instances. |

---

##### `CooldownInMinutes`<sup>Optional</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.cooldownInMinutes"></a>

```go
CooldownInMinutes *f64
```

- *Type:* *f64

The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities.

Valid values are 5 to 1440. The default is 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#cooldown_in_minutes SagemakerEndpointConfigA#cooldown_in_minutes}

---

##### `MaximumStepSize`<sup>Optional</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.maximumStepSize"></a>

```go
MaximumStepSize *f64
```

- *Type:* *f64

The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation.

Valid values are 1 to 100. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#maximum_step_size SagemakerEndpointConfigA#maximum_step_size}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

The strategy for scaling in instances.

IDLE_RELEASE releases instances that have no hosted inference component copies. CONSOLIDATION consolidates inference component copies onto fewer instances to release more instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#strategy SagemakerEndpointConfigA#strategy}

---

### SagemakerEndpointConfigProductionVariantsRoutingConfig <a name="SagemakerEndpointConfigProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsRoutingConfig {
	PrefixAwareRoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig,
	RoutingStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig.property.routingStrategy">RoutingStrategy</a></code> | <code>*string</code> | Sets how the endpoint routes incoming traffic. |

---

##### `PrefixAwareRoutingConfig`<sup>Optional</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig.property.prefixAwareRoutingConfig"></a>

```go
PrefixAwareRoutingConfig SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#prefix_aware_routing_config SagemakerEndpointConfigA#prefix_aware_routing_config}

---

##### `RoutingStrategy`<sup>Optional</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig.property.routingStrategy"></a>

```go
RoutingStrategy *string
```

- *Type:* *string

Sets how the endpoint routes incoming traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#routing_strategy SagemakerEndpointConfigA#routing_strategy}

---

### SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig {
	ConcurrencyThreshold: *f64,
	PrefixLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>*f64</code> | The maximum number of in-flight requests on the target instance before the endpoint routes to another instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | The maximum length of the prefix used for routing decisions. |

---

##### `ConcurrencyThreshold`<sup>Optional</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.concurrencyThreshold"></a>

```go
ConcurrencyThreshold *f64
```

- *Type:* *f64

The maximum number of in-flight requests on the target instance before the endpoint routes to another instance.

Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#concurrency_threshold SagemakerEndpointConfigA#concurrency_threshold}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.prefixLength"></a>

```go
PrefixLength *f64
```

- *Type:* *f64

The maximum length of the prefix used for routing decisions.

Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1024 to 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#prefix_length SagemakerEndpointConfigA#prefix_length}

---

### SagemakerEndpointConfigProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigProductionVariantsServerlessConfig {
	MaxConcurrency: *f64,
	MemorySizeInMb: *f64,
	ProvisionedConcurrency: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>*f64</code> | The maximum number of concurrent invocations your serverless endpoint can process. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>*f64</code> | The memory size of your serverless endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>*f64</code> | The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency. |

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```go
MaxConcurrency *f64
```

- *Type:* *f64

The maximum number of concurrent invocations your serverless endpoint can process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_concurrency SagemakerEndpointConfigA#max_concurrency}

---

##### `MemorySizeInMb`<sup>Optional</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```go
MemorySizeInMb *f64
```

- *Type:* *f64

The memory size of your serverless endpoint.

Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#memory_size_in_mb SagemakerEndpointConfigA#memory_size_in_mb}

---

##### `ProvisionedConcurrency`<sup>Optional</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig.property.provisionedConcurrency"></a>

```go
ProvisionedConcurrency *f64
```

- *Type:* *f64

The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#provisioned_concurrency SagemakerEndpointConfigA#provisioned_concurrency}

---

### SagemakerEndpointConfigShadowProductionVariants <a name="SagemakerEndpointConfigShadowProductionVariants" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariants {
	CapacityReservationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig,
	ContainerStartupHealthCheckTimeoutInSeconds: *f64,
	CoreDumpConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig,
	EnableSsmAccess: interface{},
	InferenceAmiVersion: *string,
	InitialInstanceCount: *f64,
	InitialVariantWeight: *f64,
	InstancePools: interface{},
	InstanceType: *string,
	ManagedInstanceScaling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling,
	ModelDataDownloadTimeoutInSeconds: *f64,
	ModelName: *string,
	RoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig,
	ServerlessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig,
	VariantInstanceProvisionTimeoutInSeconds: *f64,
	VariantName: *string,
	VolumeSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a></code> | Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a></code> | Specifies configuration for a core dump from the model container when the process crashes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>interface{}</code> | You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>*string</code> | Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>*f64</code> | Number of instances to launch initially. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>*f64</code> | Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.instancePools">InstancePools</a></code> | <code>interface{}</code> | A list of instance pools for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a></code> | Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.modelName">ModelName</a></code> | <code>*string</code> | The name of the model that you want to host. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a></code> | Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a></code> | The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>*f64</code> | The timeout value, in seconds, for provisioning instances for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.variantName">VariantName</a></code> | <code>*string</code> | The name of the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. |

---

##### `CapacityReservationConfig`<sup>Optional</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.capacityReservationConfig"></a>

```go
CapacityReservationConfig SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a>

Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_config SagemakerEndpointConfigA#capacity_reservation_config}

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
ContainerStartupHealthCheckTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfigA#container_startup_health_check_timeout_in_seconds}

---

##### `CoreDumpConfig`<sup>Optional</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.coreDumpConfig"></a>

```go
CoreDumpConfig SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a>

Specifies configuration for a core dump from the model container when the process crashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#core_dump_config SagemakerEndpointConfigA#core_dump_config}

---

##### `EnableSsmAccess`<sup>Optional</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.enableSsmAccess"></a>

```go
EnableSsmAccess interface{}
```

- *Type:* interface{}

You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint.

By default, SSM access is disabled for all production variants behind an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#enable_ssm_access SagemakerEndpointConfigA#enable_ssm_access}

---

##### `InferenceAmiVersion`<sup>Optional</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.inferenceAmiVersion"></a>

```go
InferenceAmiVersion *string
```

- *Type:* *string

Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images.

Each image is configured by AWS with a set of software and driver versions. AWS optimizes these configurations for different machine learning workloads. By selecting an AMI version, you can ensure that your inference environment is compatible with specific software requirements, such as CUDA driver versions, Linux kernel versions, or AWS Neuron driver versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#inference_ami_version SagemakerEndpointConfigA#inference_ami_version}

---

##### `InitialInstanceCount`<sup>Optional</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.initialInstanceCount"></a>

```go
InitialInstanceCount *f64
```

- *Type:* *f64

Number of instances to launch initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#initial_instance_count SagemakerEndpointConfigA#initial_instance_count}

---

##### `InitialVariantWeight`<sup>Optional</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.initialVariantWeight"></a>

```go
InitialVariantWeight *f64
```

- *Type:* *f64

Determines initial traffic distribution among all of the models that you specify in the endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#initial_variant_weight SagemakerEndpointConfigA#initial_variant_weight}

---

##### `InstancePools`<sup>Optional</sup> <a name="InstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.instancePools"></a>

```go
InstancePools interface{}
```

- *Type:* interface{}

A list of instance pools for the production variant.

Each instance pool specifies an instance type and its priority for provisioning. Use instance pools to configure heterogeneous endpoints that deploy models across multiple instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_pools SagemakerEndpointConfigA#instance_pools}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_type SagemakerEndpointConfigA#instance_type}

---

##### `ManagedInstanceScaling`<sup>Optional</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.managedInstanceScaling"></a>

```go
ManagedInstanceScaling SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a>

Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#managed_instance_scaling SagemakerEndpointConfigA#managed_instance_scaling}

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```go
ModelDataDownloadTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_data_download_timeout_in_seconds SagemakerEndpointConfigA#model_data_download_timeout_in_seconds}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

The name of the model that you want to host.

This is the name that you specified when creating the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_name SagemakerEndpointConfigA#model_name}

---

##### `RoutingConfig`<sup>Optional</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.routingConfig"></a>

```go
RoutingConfig SagemakerEndpointConfigShadowProductionVariantsRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a>

Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#routing_config SagemakerEndpointConfigA#routing_config}

---

##### `ServerlessConfig`<sup>Optional</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.serverlessConfig"></a>

```go
ServerlessConfig SagemakerEndpointConfigShadowProductionVariantsServerlessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a>

The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#serverless_config SagemakerEndpointConfigA#serverless_config}

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Optional</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.variantInstanceProvisionTimeoutInSeconds"></a>

```go
VariantInstanceProvisionTimeoutInSeconds *f64
```

- *Type:* *f64

The timeout value, in seconds, for provisioning instances for the production variant.

When SageMaker encounters an insufficient capacity error while provisioning instances, it retries with the next instance pool (if configured) or waits until the timeout expires. This timeout applies only to capacity provisioning and does not include the time for model download or container startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#variant_instance_provision_timeout_in_seconds SagemakerEndpointConfigA#variant_instance_provision_timeout_in_seconds}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.variantName"></a>

```go
VariantName *string
```

- *Type:* *string

The name of the production variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#variant_name SagemakerEndpointConfigA#variant_name}

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariants.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant.

Currently only Amazon EBS gp2 storage volumes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#volume_size_in_gb SagemakerEndpointConfigA#volume_size_in_gb}

---

### SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig <a name="SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig {
	CapacityReservationPreference: *string,
	MlReservationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Options that you can choose for the capacity reservation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.property.mlReservationArn">MlReservationArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Options that you can choose for the capacity reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_preference SagemakerEndpointConfigA#capacity_reservation_preference}

---

##### `MlReservationArn`<sup>Optional</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.property.mlReservationArn"></a>

```go
MlReservationArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#ml_reservation_arn SagemakerEndpointConfigA#ml_reservation_arn}

---

### SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig {
	DestinationS3Uri: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | The Amazon S3 bucket to send the core dump to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. |

---

##### `DestinationS3Uri`<sup>Optional</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```go
DestinationS3Uri *string
```

- *Type:* *string

The Amazon S3 bucket to send the core dump to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri SagemakerEndpointConfigA#destination_s3_uri}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption.

If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call kms:Encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#kms_key_id SagemakerEndpointConfigA#kms_key_id}

---

### SagemakerEndpointConfigShadowProductionVariantsInstancePools <a name="SagemakerEndpointConfigShadowProductionVariantsInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools {
	InstanceType: *string,
	ModelNameOverride: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.instanceType">InstanceType</a></code> | <code>*string</code> | The ML compute instance type for the instance pool. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.modelNameOverride">ModelNameOverride</a></code> | <code>*string</code> | The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.priority">Priority</a></code> | <code>*f64</code> | The priority for the instance pool. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The ML compute instance type for the instance pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#instance_type SagemakerEndpointConfigA#instance_type}

---

##### `ModelNameOverride`<sup>Optional</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.modelNameOverride"></a>

```go
ModelNameOverride *string
```

- *Type:* *string

The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant.

Use this to deploy a different model optimized for the instance type in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#model_name_override SagemakerEndpointConfigA#model_name_override}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePools.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority for the instance pool.

SageMaker attempts to provision instances in order of priority, starting with the lowest value. If instances for a higher-priority pool are unavailable, SageMaker attempts to provision from the next pool. Valid values: 1 to 5, where 1 is the highest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#priority SagemakerEndpointConfigA#priority}

---

### SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling <a name="SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling {
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
	ScaleInPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | Configures the scale-in behavior for managed instance scaling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.status">Status</a></code> | <code>*string</code> | Indicates whether managed instance scaling is enabled. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_instance_count SagemakerEndpointConfigA#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#min_instance_count SagemakerEndpointConfigA#min_instance_count}

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.scaleInPolicy"></a>

```go
ScaleInPolicy SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a>

Configures the scale-in behavior for managed instance scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#scale_in_policy SagemakerEndpointConfigA#scale_in_policy}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates whether managed instance scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#status SagemakerEndpointConfigA#status}

---

### SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy <a name="SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy {
	CooldownInMinutes: *f64,
	MaximumStepSize: *f64,
	Strategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>*f64</code> | The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.maximumStepSize">MaximumStepSize</a></code> | <code>*f64</code> | The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.strategy">Strategy</a></code> | <code>*string</code> | The strategy for scaling in instances. |

---

##### `CooldownInMinutes`<sup>Optional</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.cooldownInMinutes"></a>

```go
CooldownInMinutes *f64
```

- *Type:* *f64

The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities.

Valid values are 5 to 1440. The default is 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#cooldown_in_minutes SagemakerEndpointConfigA#cooldown_in_minutes}

---

##### `MaximumStepSize`<sup>Optional</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.maximumStepSize"></a>

```go
MaximumStepSize *f64
```

- *Type:* *f64

The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation.

Valid values are 1 to 100. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#maximum_step_size SagemakerEndpointConfigA#maximum_step_size}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

The strategy for scaling in instances.

IDLE_RELEASE releases instances that have no hosted inference component copies. CONSOLIDATION consolidates inference component copies onto fewer instances to release more instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#strategy SagemakerEndpointConfigA#strategy}

---

### SagemakerEndpointConfigShadowProductionVariantsRoutingConfig <a name="SagemakerEndpointConfigShadowProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig {
	PrefixAwareRoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig,
	RoutingStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig.property.routingStrategy">RoutingStrategy</a></code> | <code>*string</code> | Sets how the endpoint routes incoming traffic. |

---

##### `PrefixAwareRoutingConfig`<sup>Optional</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig.property.prefixAwareRoutingConfig"></a>

```go
PrefixAwareRoutingConfig SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#prefix_aware_routing_config SagemakerEndpointConfigA#prefix_aware_routing_config}

---

##### `RoutingStrategy`<sup>Optional</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig.property.routingStrategy"></a>

```go
RoutingStrategy *string
```

- *Type:* *string

Sets how the endpoint routes incoming traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#routing_strategy SagemakerEndpointConfigA#routing_strategy}

---

### SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig {
	ConcurrencyThreshold: *f64,
	PrefixLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>*f64</code> | The maximum number of in-flight requests on the target instance before the endpoint routes to another instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | The maximum length of the prefix used for routing decisions. |

---

##### `ConcurrencyThreshold`<sup>Optional</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.concurrencyThreshold"></a>

```go
ConcurrencyThreshold *f64
```

- *Type:* *f64

The maximum number of in-flight requests on the target instance before the endpoint routes to another instance.

Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#concurrency_threshold SagemakerEndpointConfigA#concurrency_threshold}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.property.prefixLength"></a>

```go
PrefixLength *f64
```

- *Type:* *f64

The maximum length of the prefix used for routing decisions.

Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1024 to 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#prefix_length SagemakerEndpointConfigA#prefix_length}

---

### SagemakerEndpointConfigShadowProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigShadowProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig {
	MaxConcurrency: *f64,
	MemorySizeInMb: *f64,
	ProvisionedConcurrency: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>*f64</code> | The maximum number of concurrent invocations your serverless endpoint can process. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>*f64</code> | The memory size of your serverless endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>*f64</code> | The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency. |

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```go
MaxConcurrency *f64
```

- *Type:* *f64

The maximum number of concurrent invocations your serverless endpoint can process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#max_concurrency SagemakerEndpointConfigA#max_concurrency}

---

##### `MemorySizeInMb`<sup>Optional</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```go
MemorySizeInMb *f64
```

- *Type:* *f64

The memory size of your serverless endpoint.

Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#memory_size_in_mb SagemakerEndpointConfigA#memory_size_in_mb}

---

##### `ProvisionedConcurrency`<sup>Optional</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig.property.provisionedConcurrency"></a>

```go
ProvisionedConcurrency *f64
```

- *Type:* *f64

The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#provisioned_concurrency SagemakerEndpointConfigA#provisioned_concurrency}

---

### SagemakerEndpointConfigTags <a name="SagemakerEndpointConfigTags" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags.property.key">Key</a></code> | <code>*string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#key SagemakerEndpointConfigA#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#value SagemakerEndpointConfigA#value}

---

### SagemakerEndpointConfigVpcConfig <a name="SagemakerEndpointConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

&sagemakerendpointconfig.SagemakerEndpointConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#security_group_ids SagemakerEndpointConfigA#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect your training job or model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_endpoint_config#subnets SagemakerEndpointConfigA#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance">ResetMaxConcurrentInvocationsPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentInvocationsPerInstance` <a name="ResetMaxConcurrentInvocationsPerInstance" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance"></a>

```go
func ResetMaxConcurrentInvocationsPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput">MaxConcurrentInvocationsPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">MaxConcurrentInvocationsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrentInvocationsPerInstanceInput`<sup>Optional</sup> <a name="MaxConcurrentInvocationsPerInstanceInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput"></a>

```go
func MaxConcurrentInvocationsPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="MaxConcurrentInvocationsPerInstance" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```go
func MaxConcurrentInvocationsPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">ResetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetIncludeInferenceResponseIn">ResetIncludeInferenceResponseIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">ResetSuccessTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorTopic` <a name="ResetErrorTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```go
func ResetErrorTopic()
```

##### `ResetIncludeInferenceResponseIn` <a name="ResetIncludeInferenceResponseIn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetIncludeInferenceResponseIn"></a>

```go
func ResetIncludeInferenceResponseIn()
```

##### `ResetSuccessTopic` <a name="ResetSuccessTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```go
func ResetSuccessTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">ErrorTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseInInput">IncludeInferenceResponseInInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">SuccessTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn">IncludeInferenceResponseIn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorTopicInput`<sup>Optional</sup> <a name="ErrorTopicInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```go
func ErrorTopicInput() *string
```

- *Type:* *string

---

##### `IncludeInferenceResponseInInput`<sup>Optional</sup> <a name="IncludeInferenceResponseInInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseInInput"></a>

```go
func IncludeInferenceResponseInInput() *[]*string
```

- *Type:* *[]*string

---

##### `SuccessTopicInput`<sup>Optional</sup> <a name="SuccessTopicInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```go
func SuccessTopicInput() *string
```

- *Type:* *string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```go
func ErrorTopic() *string
```

- *Type:* *string

---

##### `IncludeInferenceResponseIn`<sup>Required</sup> <a name="IncludeInferenceResponseIn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn"></a>

```go
func IncludeInferenceResponseIn() *[]*string
```

- *Type:* *[]*string

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```go
func SuccessTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath">ResetS3FailurePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath">ResetS3OutputPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```go
func PutNotificationConfig(value SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetS3FailurePath` <a name="ResetS3FailurePath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath"></a>

```go
func ResetS3FailurePath()
```

##### `ResetS3OutputPath` <a name="ResetS3OutputPath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath"></a>

```go
func ResetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">NotificationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput">S3FailurePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">S3FailurePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```go
func NotificationConfig() SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3FailurePathInput`<sup>Optional</sup> <a name="S3FailurePathInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput"></a>

```go
func S3FailurePathInput() *string
```

- *Type:* *string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```go
func S3OutputPathInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3FailurePath`<sup>Required</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```go
func S3FailurePath() *string
```

- *Type:* *string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```go
func S3OutputPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigAsyncInferenceConfigOutputReference <a name="SagemakerEndpointConfigAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigAsyncInferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigAsyncInferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resetClientConfig">ResetClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resetOutputConfig">ResetOutputConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putClientConfig"></a>

```go
func PutClientConfig(value SagemakerEndpointConfigAsyncInferenceConfigClientConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfig">SagemakerEndpointConfigAsyncInferenceConfigClientConfig</a>

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```go
func PutOutputConfig(value SagemakerEndpointConfigAsyncInferenceConfigOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a>

---

##### `ResetClientConfig` <a name="ResetClientConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```go
func ResetClientConfig()
```

##### `ResetOutputConfig` <a name="ResetOutputConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.resetOutputConfig"></a>

```go
func ResetOutputConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfigInput">OutputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```go
func ClientConfig() SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```go
func OutputConfig() SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```go
func ClientConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```go
func OutputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes">ResetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes">ResetJsonContentTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCsvContentTypes` <a name="ResetCsvContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes"></a>

```go
func ResetCsvContentTypes()
```

##### `ResetJsonContentTypes` <a name="ResetJsonContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes"></a>

```go
func ResetJsonContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput">CsvContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput">JsonContentTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">CsvContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">JsonContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvContentTypesInput`<sup>Optional</sup> <a name="CsvContentTypesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput"></a>

```go
func CsvContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonContentTypesInput`<sup>Optional</sup> <a name="JsonContentTypesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput"></a>

```go
func JsonContentTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CsvContentTypes`<sup>Required</sup> <a name="CsvContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```go
func CsvContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `JsonContentTypes`<sup>Required</sup> <a name="JsonContentTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```go
func JsonContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList <a name="SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference <a name="SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resetCaptureMode">ResetCaptureMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaptureMode` <a name="ResetCaptureMode" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resetCaptureMode"></a>

```go
func ResetCaptureMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput">CaptureModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">CaptureMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureModeInput`<sup>Optional</sup> <a name="CaptureModeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput"></a>

```go
func CaptureModeInput() *string
```

- *Type:* *string

---

##### `CaptureMode`<sup>Required</sup> <a name="CaptureMode" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```go
func CaptureMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigDataCaptureConfigOutputReference <a name="SagemakerEndpointConfigDataCaptureConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigDataCaptureConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigDataCaptureConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureContentTypeHeader">PutCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureOptions">PutCaptureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetCaptureContentTypeHeader">ResetCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetCaptureOptions">ResetCaptureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetDestinationS3Uri">ResetDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetEnableCapture">ResetEnableCapture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetInitialSamplingPercentage">ResetInitialSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaptureContentTypeHeader` <a name="PutCaptureContentTypeHeader" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureContentTypeHeader"></a>

```go
func PutCaptureContentTypeHeader(value SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureContentTypeHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `PutCaptureOptions` <a name="PutCaptureOptions" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureOptions"></a>

```go
func PutCaptureOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.putCaptureOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCaptureContentTypeHeader` <a name="ResetCaptureContentTypeHeader" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetCaptureContentTypeHeader"></a>

```go
func ResetCaptureContentTypeHeader()
```

##### `ResetCaptureOptions` <a name="ResetCaptureOptions" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetCaptureOptions"></a>

```go
func ResetCaptureOptions()
```

##### `ResetDestinationS3Uri` <a name="ResetDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetDestinationS3Uri"></a>

```go
func ResetDestinationS3Uri()
```

##### `ResetEnableCapture` <a name="ResetEnableCapture" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetEnableCapture"></a>

```go
func ResetEnableCapture()
```

##### `ResetInitialSamplingPercentage` <a name="ResetInitialSamplingPercentage" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetInitialSamplingPercentage"></a>

```go
func ResetInitialSamplingPercentage()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader">CaptureContentTypeHeader</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions">CaptureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput">CaptureContentTypeHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptionsInput">CaptureOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCaptureInput">EnableCaptureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentageInput">InitialSamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture">EnableCapture</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage">InitialSamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureContentTypeHeader`<sup>Required</sup> <a name="CaptureContentTypeHeader" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```go
func CaptureContentTypeHeader() SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `CaptureOptions`<sup>Required</sup> <a name="CaptureOptions" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions"></a>

```go
func CaptureOptions() SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a>

---

##### `CaptureContentTypeHeaderInput`<sup>Optional</sup> <a name="CaptureContentTypeHeaderInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput"></a>

```go
func CaptureContentTypeHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `CaptureOptionsInput`<sup>Optional</sup> <a name="CaptureOptionsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptionsInput"></a>

```go
func CaptureOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3UriInput"></a>

```go
func DestinationS3UriInput() *string
```

- *Type:* *string

---

##### `EnableCaptureInput`<sup>Optional</sup> <a name="EnableCaptureInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCaptureInput"></a>

```go
func EnableCaptureInput() interface{}
```

- *Type:* interface{}

---

##### `InitialSamplingPercentageInput`<sup>Optional</sup> <a name="InitialSamplingPercentageInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentageInput"></a>

```go
func InitialSamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```go
func DestinationS3Uri() *string
```

- *Type:* *string

---

##### `EnableCapture`<sup>Required</sup> <a name="EnableCapture" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture"></a>

```go
func EnableCapture() interface{}
```

- *Type:* interface{}

---

##### `InitialSamplingPercentage`<sup>Required</sup> <a name="InitialSamplingPercentage" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```go
func InitialSamplingPercentage() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetContentTemplate">ResetContentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeatureHeaders">ResetFeatureHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeaturesAttribute">ResetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeatureTypes">ResetFeatureTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelAttribute">ResetLabelAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelHeaders">ResetLabelHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelIndex">ResetLabelIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetMaxPayloadInMb">ResetMaxPayloadInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetMaxRecordCount">ResetMaxRecordCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetProbabilityAttribute">ResetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetProbabilityIndex">ResetProbabilityIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentTemplate` <a name="ResetContentTemplate" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetContentTemplate"></a>

```go
func ResetContentTemplate()
```

##### `ResetFeatureHeaders` <a name="ResetFeatureHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeatureHeaders"></a>

```go
func ResetFeatureHeaders()
```

##### `ResetFeaturesAttribute` <a name="ResetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeaturesAttribute"></a>

```go
func ResetFeaturesAttribute()
```

##### `ResetFeatureTypes` <a name="ResetFeatureTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetFeatureTypes"></a>

```go
func ResetFeatureTypes()
```

##### `ResetLabelAttribute` <a name="ResetLabelAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelAttribute"></a>

```go
func ResetLabelAttribute()
```

##### `ResetLabelHeaders` <a name="ResetLabelHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelHeaders"></a>

```go
func ResetLabelHeaders()
```

##### `ResetLabelIndex` <a name="ResetLabelIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetLabelIndex"></a>

```go
func ResetLabelIndex()
```

##### `ResetMaxPayloadInMb` <a name="ResetMaxPayloadInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetMaxPayloadInMb"></a>

```go
func ResetMaxPayloadInMb()
```

##### `ResetMaxRecordCount` <a name="ResetMaxRecordCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetMaxRecordCount"></a>

```go
func ResetMaxRecordCount()
```

##### `ResetProbabilityAttribute` <a name="ResetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetProbabilityAttribute"></a>

```go
func ResetProbabilityAttribute()
```

##### `ResetProbabilityIndex` <a name="ResetProbabilityIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resetProbabilityIndex"></a>

```go
func ResetProbabilityIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplateInput">ContentTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeadersInput">FeatureHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttributeInput">FeaturesAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypesInput">FeatureTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttributeInput">LabelAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeadersInput">LabelHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndexInput">LabelIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMbInput">MaxPayloadInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCountInput">MaxRecordCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttributeInput">ProbabilityAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndexInput">ProbabilityIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate">ContentTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders">FeatureHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute">FeaturesAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes">FeatureTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute">LabelAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders">LabelHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex">LabelIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb">MaxPayloadInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount">MaxRecordCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute">ProbabilityAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex">ProbabilityIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTemplateInput`<sup>Optional</sup> <a name="ContentTemplateInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplateInput"></a>

```go
func ContentTemplateInput() *string
```

- *Type:* *string

---

##### `FeatureHeadersInput`<sup>Optional</sup> <a name="FeatureHeadersInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeadersInput"></a>

```go
func FeatureHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FeaturesAttributeInput`<sup>Optional</sup> <a name="FeaturesAttributeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttributeInput"></a>

```go
func FeaturesAttributeInput() *string
```

- *Type:* *string

---

##### `FeatureTypesInput`<sup>Optional</sup> <a name="FeatureTypesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypesInput"></a>

```go
func FeatureTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelAttributeInput`<sup>Optional</sup> <a name="LabelAttributeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttributeInput"></a>

```go
func LabelAttributeInput() *string
```

- *Type:* *string

---

##### `LabelHeadersInput`<sup>Optional</sup> <a name="LabelHeadersInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeadersInput"></a>

```go
func LabelHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelIndexInput`<sup>Optional</sup> <a name="LabelIndexInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndexInput"></a>

```go
func LabelIndexInput() *f64
```

- *Type:* *f64

---

##### `MaxPayloadInMbInput`<sup>Optional</sup> <a name="MaxPayloadInMbInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMbInput"></a>

```go
func MaxPayloadInMbInput() *f64
```

- *Type:* *f64

---

##### `MaxRecordCountInput`<sup>Optional</sup> <a name="MaxRecordCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCountInput"></a>

```go
func MaxRecordCountInput() *f64
```

- *Type:* *f64

---

##### `ProbabilityAttributeInput`<sup>Optional</sup> <a name="ProbabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttributeInput"></a>

```go
func ProbabilityAttributeInput() *string
```

- *Type:* *string

---

##### `ProbabilityIndexInput`<sup>Optional</sup> <a name="ProbabilityIndexInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndexInput"></a>

```go
func ProbabilityIndexInput() *f64
```

- *Type:* *f64

---

##### `ContentTemplate`<sup>Required</sup> <a name="ContentTemplate" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate"></a>

```go
func ContentTemplate() *string
```

- *Type:* *string

---

##### `FeatureHeaders`<sup>Required</sup> <a name="FeatureHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders"></a>

```go
func FeatureHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `FeaturesAttribute`<sup>Required</sup> <a name="FeaturesAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute"></a>

```go
func FeaturesAttribute() *string
```

- *Type:* *string

---

##### `FeatureTypes`<sup>Required</sup> <a name="FeatureTypes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes"></a>

```go
func FeatureTypes() *[]*string
```

- *Type:* *[]*string

---

##### `LabelAttribute`<sup>Required</sup> <a name="LabelAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute"></a>

```go
func LabelAttribute() *string
```

- *Type:* *string

---

##### `LabelHeaders`<sup>Required</sup> <a name="LabelHeaders" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders"></a>

```go
func LabelHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `LabelIndex`<sup>Required</sup> <a name="LabelIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex"></a>

```go
func LabelIndex() *f64
```

- *Type:* *f64

---

##### `MaxPayloadInMb`<sup>Required</sup> <a name="MaxPayloadInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb"></a>

```go
func MaxPayloadInMb() *f64
```

- *Type:* *f64

---

##### `MaxRecordCount`<sup>Required</sup> <a name="MaxRecordCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount"></a>

```go
func MaxRecordCount() *f64
```

- *Type:* *f64

---

##### `ProbabilityAttribute`<sup>Required</sup> <a name="ProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute"></a>

```go
func ProbabilityAttribute() *string
```

- *Type:* *string

---

##### `ProbabilityIndex`<sup>Required</sup> <a name="ProbabilityIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex"></a>

```go
func ProbabilityIndex() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putInferenceConfig">PutInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putShapConfig">PutShapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetEnableExplanations">ResetEnableExplanations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetInferenceConfig">ResetInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetShapConfig">ResetShapConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceConfig` <a name="PutInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putInferenceConfig"></a>

```go
func PutInferenceConfig(value SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a>

---

##### `PutShapConfig` <a name="PutShapConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putShapConfig"></a>

```go
func PutShapConfig(value SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.putShapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a>

---

##### `ResetEnableExplanations` <a name="ResetEnableExplanations" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetEnableExplanations"></a>

```go
func ResetEnableExplanations()
```

##### `ResetInferenceConfig` <a name="ResetInferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetInferenceConfig"></a>

```go
func ResetInferenceConfig()
```

##### `ResetShapConfig` <a name="ResetShapConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resetShapConfig"></a>

```go
func ResetShapConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig">InferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig">ShapConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanationsInput">EnableExplanationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfigInput">InferenceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfigInput">ShapConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations">EnableExplanations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InferenceConfig`<sup>Required</sup> <a name="InferenceConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig"></a>

```go
func InferenceConfig() SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a>

---

##### `ShapConfig`<sup>Required</sup> <a name="ShapConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig"></a>

```go
func ShapConfig() SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a>

---

##### `EnableExplanationsInput`<sup>Optional</sup> <a name="EnableExplanationsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanationsInput"></a>

```go
func EnableExplanationsInput() *string
```

- *Type:* *string

---

##### `InferenceConfigInput`<sup>Optional</sup> <a name="InferenceConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfigInput"></a>

```go
func InferenceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ShapConfigInput`<sup>Optional</sup> <a name="ShapConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfigInput"></a>

```go
func ShapConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableExplanations`<sup>Required</sup> <a name="EnableExplanations" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations"></a>

```go
func EnableExplanations() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putShapBaselineConfig">PutShapBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putTextConfig">PutTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetNumberOfSamples">ResetNumberOfSamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetSeed">ResetSeed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetShapBaselineConfig">ResetShapBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetTextConfig">ResetTextConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetUseLogit">ResetUseLogit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapBaselineConfig` <a name="PutShapBaselineConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putShapBaselineConfig"></a>

```go
func PutShapBaselineConfig(value SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putShapBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a>

---

##### `PutTextConfig` <a name="PutTextConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putTextConfig"></a>

```go
func PutTextConfig(value SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.putTextConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a>

---

##### `ResetNumberOfSamples` <a name="ResetNumberOfSamples" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetNumberOfSamples"></a>

```go
func ResetNumberOfSamples()
```

##### `ResetSeed` <a name="ResetSeed" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetSeed"></a>

```go
func ResetSeed()
```

##### `ResetShapBaselineConfig` <a name="ResetShapBaselineConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetShapBaselineConfig"></a>

```go
func ResetShapBaselineConfig()
```

##### `ResetTextConfig` <a name="ResetTextConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetTextConfig"></a>

```go
func ResetTextConfig()
```

##### `ResetUseLogit` <a name="ResetUseLogit" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resetUseLogit"></a>

```go
func ResetUseLogit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig">ShapBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig">TextConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamplesInput">NumberOfSamplesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seedInput">SeedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfigInput">ShapBaselineConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfigInput">TextConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogitInput">UseLogitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples">NumberOfSamples</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed">Seed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit">UseLogit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShapBaselineConfig`<sup>Required</sup> <a name="ShapBaselineConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig"></a>

```go
func ShapBaselineConfig() SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a>

---

##### `TextConfig`<sup>Required</sup> <a name="TextConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig"></a>

```go
func TextConfig() SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a>

---

##### `NumberOfSamplesInput`<sup>Optional</sup> <a name="NumberOfSamplesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamplesInput"></a>

```go
func NumberOfSamplesInput() *f64
```

- *Type:* *f64

---

##### `SeedInput`<sup>Optional</sup> <a name="SeedInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seedInput"></a>

```go
func SeedInput() *f64
```

- *Type:* *f64

---

##### `ShapBaselineConfigInput`<sup>Optional</sup> <a name="ShapBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfigInput"></a>

```go
func ShapBaselineConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TextConfigInput`<sup>Optional</sup> <a name="TextConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfigInput"></a>

```go
func TextConfigInput() interface{}
```

- *Type:* interface{}

---

##### `UseLogitInput`<sup>Optional</sup> <a name="UseLogitInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogitInput"></a>

```go
func UseLogitInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfSamples`<sup>Required</sup> <a name="NumberOfSamples" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples"></a>

```go
func NumberOfSamples() *f64
```

- *Type:* *f64

---

##### `Seed`<sup>Required</sup> <a name="Seed" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed"></a>

```go
func Seed() *f64
```

- *Type:* *f64

---

##### `UseLogit`<sup>Required</sup> <a name="UseLogit" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit"></a>

```go
func UseLogit() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetShapBaseline">ResetShapBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetShapBaselineUri">ResetShapBaselineUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetMimeType"></a>

```go
func ResetMimeType()
```

##### `ResetShapBaseline` <a name="ResetShapBaseline" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetShapBaseline"></a>

```go
func ResetShapBaseline()
```

##### `ResetShapBaselineUri` <a name="ResetShapBaselineUri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resetShapBaselineUri"></a>

```go
func ResetShapBaselineUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineInput">ShapBaselineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUriInput">ShapBaselineUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline">ShapBaseline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri">ShapBaselineUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `ShapBaselineInput`<sup>Optional</sup> <a name="ShapBaselineInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineInput"></a>

```go
func ShapBaselineInput() *string
```

- *Type:* *string

---

##### `ShapBaselineUriInput`<sup>Optional</sup> <a name="ShapBaselineUriInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUriInput"></a>

```go
func ShapBaselineUriInput() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `ShapBaseline`<sup>Required</sup> <a name="ShapBaseline" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline"></a>

```go
func ShapBaseline() *string
```

- *Type:* *string

---

##### `ShapBaselineUri`<sup>Required</sup> <a name="ShapBaselineUri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri"></a>

```go
func ShapBaselineUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resetGranularity"></a>

```go
func ResetGranularity()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resetLanguage"></a>

```go
func ResetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularityInput">GranularityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularityInput"></a>

```go
func GranularityInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigExplainerConfigOutputReference <a name="SagemakerEndpointConfigExplainerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigExplainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigExplainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.putClarifyExplainerConfig">PutClarifyExplainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.resetClarifyExplainerConfig">ResetClarifyExplainerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClarifyExplainerConfig` <a name="PutClarifyExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.putClarifyExplainerConfig"></a>

```go
func PutClarifyExplainerConfig(value SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.putClarifyExplainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a>

---

##### `ResetClarifyExplainerConfig` <a name="ResetClarifyExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.resetClarifyExplainerConfig"></a>

```go
func ResetClarifyExplainerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig">ClarifyExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfigInput">ClarifyExplainerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClarifyExplainerConfig`<sup>Required</sup> <a name="ClarifyExplainerConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig"></a>

```go
func ClarifyExplainerConfig() SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">SagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a>

---

##### `ClarifyExplainerConfigInput`<sup>Optional</sup> <a name="ClarifyExplainerConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfigInput"></a>

```go
func ClarifyExplainerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigMetricsConfigOutputReference <a name="SagemakerEndpointConfigMetricsConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetEnableDetailedObservability">ResetEnableDetailedObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetEnableEnhancedMetrics">ResetEnableEnhancedMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetMetricPublishFrequencyInSeconds">ResetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDetailedObservability` <a name="ResetEnableDetailedObservability" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetEnableDetailedObservability"></a>

```go
func ResetEnableDetailedObservability()
```

##### `ResetEnableEnhancedMetrics` <a name="ResetEnableEnhancedMetrics" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetEnableEnhancedMetrics"></a>

```go
func ResetEnableEnhancedMetrics()
```

##### `ResetMetricPublishFrequencyInSeconds` <a name="ResetMetricPublishFrequencyInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```go
func ResetMetricPublishFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservabilityInput">EnableDetailedObservabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetricsInput">EnableEnhancedMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSecondsInput">MetricPublishFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability">EnableDetailedObservability</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics">EnableEnhancedMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableDetailedObservabilityInput`<sup>Optional</sup> <a name="EnableDetailedObservabilityInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservabilityInput"></a>

```go
func EnableDetailedObservabilityInput() interface{}
```

- *Type:* interface{}

---

##### `EnableEnhancedMetricsInput`<sup>Optional</sup> <a name="EnableEnhancedMetricsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetricsInput"></a>

```go
func EnableEnhancedMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="MetricPublishFrequencyInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```go
func MetricPublishFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `EnableDetailedObservability`<sup>Required</sup> <a name="EnableDetailedObservability" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability"></a>

```go
func EnableDetailedObservability() interface{}
```

- *Type:* interface{}

---

##### `EnableEnhancedMetrics`<sup>Required</sup> <a name="EnableEnhancedMetrics" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics"></a>

```go
func EnableEnhancedMetrics() interface{}
```

- *Type:* interface{}

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds"></a>

```go
func MetricPublishFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference <a name="SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resetMlReservationArn">ResetMlReservationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetMlReservationArn` <a name="ResetMlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resetMlReservationArn"></a>

```go
func ResetMlReservationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArnInput">MlReservationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">MlReservationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `MlReservationArnInput`<sup>Optional</sup> <a name="MlReservationArnInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArnInput"></a>

```go
func MlReservationArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `MlReservationArn`<sup>Required</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```go
func MlReservationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resetDestinationS3Uri">ResetDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationS3Uri` <a name="ResetDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resetDestinationS3Uri"></a>

```go
func ResetDestinationS3Uri()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```go
func DestinationS3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```go
func DestinationS3Uri() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsInstancePoolsList <a name="SagemakerEndpointConfigProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsInstancePoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigProductionVariantsInstancePoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference <a name="SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetModelNameOverride">ResetModelNameOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetModelNameOverride` <a name="ResetModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetModelNameOverride"></a>

```go
func ResetModelNameOverride()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverrideInput">ModelNameOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">ModelNameOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ModelNameOverrideInput`<sup>Optional</sup> <a name="ModelNameOverrideInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverrideInput"></a>

```go
func ModelNameOverrideInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelNameOverride`<sup>Required</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```go
func ModelNameOverride() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsList <a name="SagemakerEndpointConfigProductionVariantsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigProductionVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference <a name="SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy"></a>

```go
func PutScaleInPolicy(value SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetScaleInPolicy"></a>

```go
func ResetScaleInPolicy()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```go
func ScaleInPolicy() SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicyInput"></a>

```go
func ScaleInPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetCooldownInMinutes">ResetCooldownInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetMaximumStepSize">ResetMaximumStepSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownInMinutes` <a name="ResetCooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetCooldownInMinutes"></a>

```go
func ResetCooldownInMinutes()
```

##### `ResetMaximumStepSize` <a name="ResetMaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetMaximumStepSize"></a>

```go
func ResetMaximumStepSize()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutesInput">CooldownInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSizeInput">MaximumStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">MaximumStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CooldownInMinutesInput`<sup>Optional</sup> <a name="CooldownInMinutesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutesInput"></a>

```go
func CooldownInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MaximumStepSizeInput`<sup>Optional</sup> <a name="MaximumStepSizeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSizeInput"></a>

```go
func MaximumStepSizeInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `CooldownInMinutes`<sup>Required</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```go
func CooldownInMinutes() *f64
```

- *Type:* *f64

---

##### `MaximumStepSize`<sup>Required</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```go
func MaximumStepSize() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsOutputReference <a name="SagemakerEndpointConfigProductionVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigProductionVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCapacityReservationConfig">PutCapacityReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCoreDumpConfig">PutCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putInstancePools">PutInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putManagedInstanceScaling">PutManagedInstanceScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putRoutingConfig">PutRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putServerlessConfig">PutServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetCapacityReservationConfig">ResetCapacityReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetCoreDumpConfig">ResetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetEnableSsmAccess">ResetEnableSsmAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInferenceAmiVersion">ResetInferenceAmiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInitialInstanceCount">ResetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInitialVariantWeight">ResetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInstancePools">ResetInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetManagedInstanceScaling">ResetManagedInstanceScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetRoutingConfig">ResetRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetServerlessConfig">ResetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetVariantInstanceProvisionTimeoutInSeconds">ResetVariantInstanceProvisionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationConfig` <a name="PutCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCapacityReservationConfig"></a>

```go
func PutCapacityReservationConfig(value SagemakerEndpointConfigProductionVariantsCapacityReservationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCapacityReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a>

---

##### `PutCoreDumpConfig` <a name="PutCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCoreDumpConfig"></a>

```go
func PutCoreDumpConfig(value SagemakerEndpointConfigProductionVariantsCoreDumpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfig">SagemakerEndpointConfigProductionVariantsCoreDumpConfig</a>

---

##### `PutInstancePools` <a name="PutInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putInstancePools"></a>

```go
func PutInstancePools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putInstancePools.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedInstanceScaling` <a name="PutManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putManagedInstanceScaling"></a>

```go
func PutManagedInstanceScaling(value SagemakerEndpointConfigProductionVariantsManagedInstanceScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putManagedInstanceScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a>

---

##### `PutRoutingConfig` <a name="PutRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putRoutingConfig"></a>

```go
func PutRoutingConfig(value SagemakerEndpointConfigProductionVariantsRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfig</a>

---

##### `PutServerlessConfig` <a name="PutServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putServerlessConfig"></a>

```go
func PutServerlessConfig(value SagemakerEndpointConfigProductionVariantsServerlessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfig">SagemakerEndpointConfigProductionVariantsServerlessConfig</a>

---

##### `ResetCapacityReservationConfig` <a name="ResetCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetCapacityReservationConfig"></a>

```go
func ResetCapacityReservationConfig()
```

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetCoreDumpConfig` <a name="ResetCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```go
func ResetCoreDumpConfig()
```

##### `ResetEnableSsmAccess` <a name="ResetEnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetEnableSsmAccess"></a>

```go
func ResetEnableSsmAccess()
```

##### `ResetInferenceAmiVersion` <a name="ResetInferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInferenceAmiVersion"></a>

```go
func ResetInferenceAmiVersion()
```

##### `ResetInitialInstanceCount` <a name="ResetInitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```go
func ResetInitialInstanceCount()
```

##### `ResetInitialVariantWeight` <a name="ResetInitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```go
func ResetInitialVariantWeight()
```

##### `ResetInstancePools` <a name="ResetInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInstancePools"></a>

```go
func ResetInstancePools()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetManagedInstanceScaling` <a name="ResetManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetManagedInstanceScaling"></a>

```go
func ResetManagedInstanceScaling()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```go
func ResetModelDataDownloadTimeoutInSeconds()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetRoutingConfig` <a name="ResetRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetRoutingConfig"></a>

```go
func ResetRoutingConfig()
```

##### `ResetServerlessConfig` <a name="ResetServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetServerlessConfig"></a>

```go
func ResetServerlessConfig()
```

##### `ResetVariantInstanceProvisionTimeoutInSeconds` <a name="ResetVariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetVariantInstanceProvisionTimeoutInSeconds"></a>

```go
func ResetVariantInstanceProvisionTimeoutInSeconds()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```go
func ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools">InstancePools</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList">SagemakerEndpointConfigProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfigInput">CapacityReservationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfigInput">CoreDumpConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccessInput">EnableSsmAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersionInput">InferenceAmiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCountInput">InitialInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeightInput">InitialVariantWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instancePoolsInput">InstancePoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScalingInput">ManagedInstanceScalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfigInput">RoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfigInput">ServerlessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSecondsInput">VariantInstanceProvisionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantNameInput">VariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationConfig`<sup>Required</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```go
func CapacityReservationConfig() SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">SagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig"></a>

```go
func CoreDumpConfig() SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `InstancePools`<sup>Required</sup> <a name="InstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools"></a>

```go
func InstancePools() SagemakerEndpointConfigProductionVariantsInstancePoolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsInstancePoolsList">SagemakerEndpointConfigProductionVariantsInstancePoolsList</a>

---

##### `ManagedInstanceScaling`<sup>Required</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```go
func ManagedInstanceScaling() SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">SagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig"></a>

```go
func RoutingConfig() SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig"></a>

```go
func ServerlessConfig() SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a>

---

##### `CapacityReservationConfigInput`<sup>Optional</sup> <a name="CapacityReservationConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfigInput"></a>

```go
func CapacityReservationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```go
func ContainerStartupHealthCheckTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CoreDumpConfigInput`<sup>Optional</sup> <a name="CoreDumpConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```go
func CoreDumpConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSsmAccessInput`<sup>Optional</sup> <a name="EnableSsmAccessInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccessInput"></a>

```go
func EnableSsmAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceAmiVersionInput`<sup>Optional</sup> <a name="InferenceAmiVersionInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersionInput"></a>

```go
func InferenceAmiVersionInput() *string
```

- *Type:* *string

---

##### `InitialInstanceCountInput`<sup>Optional</sup> <a name="InitialInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```go
func InitialInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InitialVariantWeightInput`<sup>Optional</sup> <a name="InitialVariantWeightInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```go
func InitialVariantWeightInput() *f64
```

- *Type:* *f64

---

##### `InstancePoolsInput`<sup>Optional</sup> <a name="InstancePoolsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instancePoolsInput"></a>

```go
func InstancePoolsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceScalingInput`<sup>Optional</sup> <a name="ManagedInstanceScalingInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScalingInput"></a>

```go
func ManagedInstanceScalingInput() interface{}
```

- *Type:* interface{}

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```go
func ModelDataDownloadTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `RoutingConfigInput`<sup>Optional</sup> <a name="RoutingConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfigInput"></a>

```go
func RoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessConfigInput`<sup>Optional</sup> <a name="ServerlessConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```go
func ServerlessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VariantInstanceProvisionTimeoutInSecondsInput`<sup>Optional</sup> <a name="VariantInstanceProvisionTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSecondsInput"></a>

```go
func VariantInstanceProvisionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantNameInput"></a>

```go
func VariantNameInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ContainerStartupHealthCheckTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `EnableSsmAccess`<sup>Required</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess"></a>

```go
func EnableSsmAccess() interface{}
```

- *Type:* interface{}

---

##### `InferenceAmiVersion`<sup>Required</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```go
func InferenceAmiVersion() *string
```

- *Type:* *string

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount"></a>

```go
func InitialInstanceCount() *f64
```

- *Type:* *f64

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight"></a>

```go
func InitialVariantWeight() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```go
func ModelDataDownloadTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```go
func VariantInstanceProvisionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.variantName"></a>

```go
func VariantName() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference <a name="SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig">PutPrefixAwareRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resetPrefixAwareRoutingConfig">ResetPrefixAwareRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resetRoutingStrategy">ResetRoutingStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixAwareRoutingConfig` <a name="PutPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig"></a>

```go
func PutPrefixAwareRoutingConfig(value SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---

##### `ResetPrefixAwareRoutingConfig` <a name="ResetPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resetPrefixAwareRoutingConfig"></a>

```go
func ResetPrefixAwareRoutingConfig()
```

##### `ResetRoutingStrategy` <a name="ResetRoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resetRoutingStrategy"></a>

```go
func ResetRoutingStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfigInput">PrefixAwareRoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategyInput">RoutingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy">RoutingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixAwareRoutingConfig`<sup>Required</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```go
func PrefixAwareRoutingConfig() SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `PrefixAwareRoutingConfigInput`<sup>Optional</sup> <a name="PrefixAwareRoutingConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfigInput"></a>

```go
func PrefixAwareRoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingStrategyInput`<sup>Optional</sup> <a name="RoutingStrategyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategyInput"></a>

```go
func RoutingStrategyInput() *string
```

- *Type:* *string

---

##### `RoutingStrategy`<sup>Required</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```go
func RoutingStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetConcurrencyThreshold">ResetConcurrencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConcurrencyThreshold` <a name="ResetConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetConcurrencyThreshold"></a>

```go
func ResetConcurrencyThreshold()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetPrefixLength"></a>

```go
func ResetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThresholdInput">ConcurrencyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrencyThresholdInput`<sup>Optional</sup> <a name="ConcurrencyThresholdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThresholdInput"></a>

```go
func ConcurrencyThresholdInput() *f64
```

- *Type:* *f64

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLengthInput"></a>

```go
func PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `ConcurrencyThreshold`<sup>Required</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```go
func ConcurrencyThreshold() *f64
```

- *Type:* *f64

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```go
func PrefixLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetMemorySizeInMb">ResetMemorySizeInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetProvisionedConcurrency">ResetProvisionedConcurrency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetMaxConcurrency"></a>

```go
func ResetMaxConcurrency()
```

##### `ResetMemorySizeInMb` <a name="ResetMemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetMemorySizeInMb"></a>

```go
func ResetMemorySizeInMb()
```

##### `ResetProvisionedConcurrency` <a name="ResetProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resetProvisionedConcurrency"></a>

```go
func ResetProvisionedConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">MemorySizeInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrencyInput">ProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```go
func MaxConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MemorySizeInMbInput`<sup>Optional</sup> <a name="MemorySizeInMbInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```go
func MemorySizeInMbInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrencyInput`<sup>Optional</sup> <a name="ProvisionedConcurrencyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrencyInput"></a>

```go
func ProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```go
func MaxConcurrency() *f64
```

- *Type:* *f64

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```go
func MemorySizeInMb() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrency`<sup>Required</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```go
func ProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resetMlReservationArn">ResetMlReservationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetMlReservationArn` <a name="ResetMlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resetMlReservationArn"></a>

```go
func ResetMlReservationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArnInput">MlReservationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">MlReservationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `MlReservationArnInput`<sup>Optional</sup> <a name="MlReservationArnInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArnInput"></a>

```go
func MlReservationArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `MlReservationArn`<sup>Required</sup> <a name="MlReservationArn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```go
func MlReservationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resetDestinationS3Uri">ResetDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationS3Uri` <a name="ResetDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resetDestinationS3Uri"></a>

```go
func ResetDestinationS3Uri()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```go
func DestinationS3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```go
func DestinationS3Uri() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList <a name="SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetModelNameOverride">ResetModelNameOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetModelNameOverride` <a name="ResetModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetModelNameOverride"></a>

```go
func ResetModelNameOverride()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverrideInput">ModelNameOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">ModelNameOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ModelNameOverrideInput`<sup>Optional</sup> <a name="ModelNameOverrideInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverrideInput"></a>

```go
func ModelNameOverrideInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelNameOverride`<sup>Required</sup> <a name="ModelNameOverride" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```go
func ModelNameOverride() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsList <a name="SagemakerEndpointConfigShadowProductionVariantsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigShadowProductionVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigShadowProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy"></a>

```go
func PutScaleInPolicy(value SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetScaleInPolicy"></a>

```go
func ResetScaleInPolicy()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```go
func ScaleInPolicy() SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicyInput"></a>

```go
func ScaleInPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetCooldownInMinutes">ResetCooldownInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetMaximumStepSize">ResetMaximumStepSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownInMinutes` <a name="ResetCooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetCooldownInMinutes"></a>

```go
func ResetCooldownInMinutes()
```

##### `ResetMaximumStepSize` <a name="ResetMaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetMaximumStepSize"></a>

```go
func ResetMaximumStepSize()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutesInput">CooldownInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSizeInput">MaximumStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">CooldownInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">MaximumStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CooldownInMinutesInput`<sup>Optional</sup> <a name="CooldownInMinutesInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutesInput"></a>

```go
func CooldownInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MaximumStepSizeInput`<sup>Optional</sup> <a name="MaximumStepSizeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSizeInput"></a>

```go
func MaximumStepSizeInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `CooldownInMinutes`<sup>Required</sup> <a name="CooldownInMinutes" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```go
func CooldownInMinutes() *f64
```

- *Type:* *f64

---

##### `MaximumStepSize`<sup>Required</sup> <a name="MaximumStepSize" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```go
func MaximumStepSize() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigShadowProductionVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCapacityReservationConfig">PutCapacityReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCoreDumpConfig">PutCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putInstancePools">PutInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putManagedInstanceScaling">PutManagedInstanceScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putRoutingConfig">PutRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putServerlessConfig">PutServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetCapacityReservationConfig">ResetCapacityReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetCoreDumpConfig">ResetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetEnableSsmAccess">ResetEnableSsmAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInferenceAmiVersion">ResetInferenceAmiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInitialInstanceCount">ResetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInitialVariantWeight">ResetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInstancePools">ResetInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetManagedInstanceScaling">ResetManagedInstanceScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetRoutingConfig">ResetRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetServerlessConfig">ResetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVariantInstanceProvisionTimeoutInSeconds">ResetVariantInstanceProvisionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVariantName">ResetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationConfig` <a name="PutCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCapacityReservationConfig"></a>

```go
func PutCapacityReservationConfig(value SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCapacityReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a>

---

##### `PutCoreDumpConfig` <a name="PutCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCoreDumpConfig"></a>

```go
func PutCoreDumpConfig(value SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a>

---

##### `PutInstancePools` <a name="PutInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putInstancePools"></a>

```go
func PutInstancePools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putInstancePools.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedInstanceScaling` <a name="PutManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putManagedInstanceScaling"></a>

```go
func PutManagedInstanceScaling(value SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putManagedInstanceScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a>

---

##### `PutRoutingConfig` <a name="PutRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putRoutingConfig"></a>

```go
func PutRoutingConfig(value SagemakerEndpointConfigShadowProductionVariantsRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a>

---

##### `PutServerlessConfig` <a name="PutServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putServerlessConfig"></a>

```go
func PutServerlessConfig(value SagemakerEndpointConfigShadowProductionVariantsServerlessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a>

---

##### `ResetCapacityReservationConfig` <a name="ResetCapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetCapacityReservationConfig"></a>

```go
func ResetCapacityReservationConfig()
```

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetCoreDumpConfig` <a name="ResetCoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```go
func ResetCoreDumpConfig()
```

##### `ResetEnableSsmAccess` <a name="ResetEnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetEnableSsmAccess"></a>

```go
func ResetEnableSsmAccess()
```

##### `ResetInferenceAmiVersion` <a name="ResetInferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInferenceAmiVersion"></a>

```go
func ResetInferenceAmiVersion()
```

##### `ResetInitialInstanceCount` <a name="ResetInitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```go
func ResetInitialInstanceCount()
```

##### `ResetInitialVariantWeight` <a name="ResetInitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```go
func ResetInitialVariantWeight()
```

##### `ResetInstancePools` <a name="ResetInstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInstancePools"></a>

```go
func ResetInstancePools()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetManagedInstanceScaling` <a name="ResetManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetManagedInstanceScaling"></a>

```go
func ResetManagedInstanceScaling()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```go
func ResetModelDataDownloadTimeoutInSeconds()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetRoutingConfig` <a name="ResetRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetRoutingConfig"></a>

```go
func ResetRoutingConfig()
```

##### `ResetServerlessConfig` <a name="ResetServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetServerlessConfig"></a>

```go
func ResetServerlessConfig()
```

##### `ResetVariantInstanceProvisionTimeoutInSeconds` <a name="ResetVariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVariantInstanceProvisionTimeoutInSeconds"></a>

```go
func ResetVariantInstanceProvisionTimeoutInSeconds()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVariantName"></a>

```go
func ResetVariantName()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```go
func ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig">CapacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools">InstancePools</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling">ManagedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfigInput">CapacityReservationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfigInput">CoreDumpConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccessInput">EnableSsmAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersionInput">InferenceAmiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCountInput">InitialInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeightInput">InitialVariantWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePoolsInput">InstancePoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScalingInput">ManagedInstanceScalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfigInput">RoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfigInput">ServerlessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSecondsInput">VariantInstanceProvisionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantNameInput">VariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess">EnableSsmAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion">InferenceAmiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">VariantInstanceProvisionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationConfig`<sup>Required</sup> <a name="CapacityReservationConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```go
func CapacityReservationConfig() SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```go
func CoreDumpConfig() SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `InstancePools`<sup>Required</sup> <a name="InstancePools" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools"></a>

```go
func InstancePools() SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">SagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a>

---

##### `ManagedInstanceScaling`<sup>Required</sup> <a name="ManagedInstanceScaling" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```go
func ManagedInstanceScaling() SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">SagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig"></a>

```go
func RoutingConfig() SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```go
func ServerlessConfig() SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `CapacityReservationConfigInput`<sup>Optional</sup> <a name="CapacityReservationConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfigInput"></a>

```go
func CapacityReservationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```go
func ContainerStartupHealthCheckTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CoreDumpConfigInput`<sup>Optional</sup> <a name="CoreDumpConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```go
func CoreDumpConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSsmAccessInput`<sup>Optional</sup> <a name="EnableSsmAccessInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccessInput"></a>

```go
func EnableSsmAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceAmiVersionInput`<sup>Optional</sup> <a name="InferenceAmiVersionInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersionInput"></a>

```go
func InferenceAmiVersionInput() *string
```

- *Type:* *string

---

##### `InitialInstanceCountInput`<sup>Optional</sup> <a name="InitialInstanceCountInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```go
func InitialInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InitialVariantWeightInput`<sup>Optional</sup> <a name="InitialVariantWeightInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```go
func InitialVariantWeightInput() *f64
```

- *Type:* *f64

---

##### `InstancePoolsInput`<sup>Optional</sup> <a name="InstancePoolsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePoolsInput"></a>

```go
func InstancePoolsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceScalingInput`<sup>Optional</sup> <a name="ManagedInstanceScalingInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScalingInput"></a>

```go
func ManagedInstanceScalingInput() interface{}
```

- *Type:* interface{}

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```go
func ModelDataDownloadTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `RoutingConfigInput`<sup>Optional</sup> <a name="RoutingConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfigInput"></a>

```go
func RoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessConfigInput`<sup>Optional</sup> <a name="ServerlessConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```go
func ServerlessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VariantInstanceProvisionTimeoutInSecondsInput`<sup>Optional</sup> <a name="VariantInstanceProvisionTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSecondsInput"></a>

```go
func VariantInstanceProvisionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantNameInput"></a>

```go
func VariantNameInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ContainerStartupHealthCheckTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `EnableSsmAccess`<sup>Required</sup> <a name="EnableSsmAccess" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess"></a>

```go
func EnableSsmAccess() interface{}
```

- *Type:* interface{}

---

##### `InferenceAmiVersion`<sup>Required</sup> <a name="InferenceAmiVersion" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```go
func InferenceAmiVersion() *string
```

- *Type:* *string

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```go
func InitialInstanceCount() *f64
```

- *Type:* *f64

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```go
func InitialVariantWeight() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```go
func ModelDataDownloadTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `VariantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="VariantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```go
func VariantInstanceProvisionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName"></a>

```go
func VariantName() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig">PutPrefixAwareRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resetPrefixAwareRoutingConfig">ResetPrefixAwareRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resetRoutingStrategy">ResetRoutingStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixAwareRoutingConfig` <a name="PutPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig"></a>

```go
func PutPrefixAwareRoutingConfig(value SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.putPrefixAwareRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---

##### `ResetPrefixAwareRoutingConfig` <a name="ResetPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resetPrefixAwareRoutingConfig"></a>

```go
func ResetPrefixAwareRoutingConfig()
```

##### `ResetRoutingStrategy` <a name="ResetRoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resetRoutingStrategy"></a>

```go
func ResetRoutingStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">PrefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfigInput">PrefixAwareRoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategyInput">RoutingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy">RoutingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixAwareRoutingConfig`<sup>Required</sup> <a name="PrefixAwareRoutingConfig" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```go
func PrefixAwareRoutingConfig() SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `PrefixAwareRoutingConfigInput`<sup>Optional</sup> <a name="PrefixAwareRoutingConfigInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfigInput"></a>

```go
func PrefixAwareRoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingStrategyInput`<sup>Optional</sup> <a name="RoutingStrategyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategyInput"></a>

```go
func RoutingStrategyInput() *string
```

- *Type:* *string

---

##### `RoutingStrategy`<sup>Required</sup> <a name="RoutingStrategy" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```go
func RoutingStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetConcurrencyThreshold">ResetConcurrencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConcurrencyThreshold` <a name="ResetConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetConcurrencyThreshold"></a>

```go
func ResetConcurrencyThreshold()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resetPrefixLength"></a>

```go
func ResetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThresholdInput">ConcurrencyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">ConcurrencyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrencyThresholdInput`<sup>Optional</sup> <a name="ConcurrencyThresholdInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThresholdInput"></a>

```go
func ConcurrencyThresholdInput() *f64
```

- *Type:* *f64

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLengthInput"></a>

```go
func PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `ConcurrencyThreshold`<sup>Required</sup> <a name="ConcurrencyThreshold" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```go
func ConcurrencyThreshold() *f64
```

- *Type:* *f64

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```go
func PrefixLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetMemorySizeInMb">ResetMemorySizeInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetProvisionedConcurrency">ResetProvisionedConcurrency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetMaxConcurrency"></a>

```go
func ResetMaxConcurrency()
```

##### `ResetMemorySizeInMb` <a name="ResetMemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetMemorySizeInMb"></a>

```go
func ResetMemorySizeInMb()
```

##### `ResetProvisionedConcurrency` <a name="ResetProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resetProvisionedConcurrency"></a>

```go
func ResetProvisionedConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">MemorySizeInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrencyInput">ProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">ProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```go
func MaxConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MemorySizeInMbInput`<sup>Optional</sup> <a name="MemorySizeInMbInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```go
func MemorySizeInMbInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrencyInput`<sup>Optional</sup> <a name="ProvisionedConcurrencyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrencyInput"></a>

```go
func ProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```go
func MaxConcurrency() *f64
```

- *Type:* *f64

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```go
func MemorySizeInMb() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrency`<sup>Required</sup> <a name="ProvisionedConcurrency" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```go
func ProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigTagsList <a name="SagemakerEndpointConfigTagsList" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerEndpointConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.get"></a>

```go
func Get(index *f64) SagemakerEndpointConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigTagsOutputReference <a name="SagemakerEndpointConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerEndpointConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerEndpointConfigVpcConfigOutputReference <a name="SagemakerEndpointConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerendpointconfig"

sagemakerendpointconfig.NewSagemakerEndpointConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerEndpointConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerEndpointConfig.SagemakerEndpointConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



