# `sagemakerInferenceComponent` Submodule <a name="`sagemakerInferenceComponent` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceComponent <a name="SagemakerInferenceComponent" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponent(scope Construct, id *string, config SagemakerInferenceComponentConfig) SagemakerInferenceComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig">PutDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification">PutSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig">ResetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetEndpointArn">ResetEndpointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetInferenceComponentName">ResetInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName">ResetVariantName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentConfig` <a name="PutDeploymentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig"></a>

```go
func PutDeploymentConfig(value SagemakerInferenceComponentDeploymentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value SagemakerInferenceComponentRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>

---

##### `PutSpecification` <a name="PutSpecification" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification"></a>

```go
func PutSpecification(value SagemakerInferenceComponentSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeploymentConfig` <a name="ResetDeploymentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig"></a>

```go
func ResetDeploymentConfig()
```

##### `ResetEndpointArn` <a name="ResetEndpointArn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetEndpointArn"></a>

```go
func ResetEndpointArn()
```

##### `ResetInferenceComponentName` <a name="ResetInferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetInferenceComponentName"></a>

```go
func ResetInferenceComponentName()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName"></a>

```go
func ResetVariantName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.SagemakerInferenceComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerInferenceComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference">SagemakerInferenceComponentDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentArn">InferenceComponentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentStatus">InferenceComponentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference">SagemakerInferenceComponentRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification">Specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference">SagemakerInferenceComponentSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList">SagemakerInferenceComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput">DeploymentConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArnInput">EndpointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentNameInput">InferenceComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput">SpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput">VariantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentName">InferenceComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName">VariantName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig"></a>

```go
func DeploymentConfig() SagemakerInferenceComponentDeploymentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference">SagemakerInferenceComponentDeploymentConfigOutputReference</a>

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InferenceComponentArn`<sup>Required</sup> <a name="InferenceComponentArn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentArn"></a>

```go
func InferenceComponentArn() *string
```

- *Type:* *string

---

##### `InferenceComponentStatus`<sup>Required</sup> <a name="InferenceComponentStatus" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentStatus"></a>

```go
func InferenceComponentStatus() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig"></a>

```go
func RuntimeConfig() SagemakerInferenceComponentRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference">SagemakerInferenceComponentRuntimeConfigOutputReference</a>

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification"></a>

```go
func Specification() SagemakerInferenceComponentSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference">SagemakerInferenceComponentSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags"></a>

```go
func Tags() SagemakerInferenceComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList">SagemakerInferenceComponentTagsList</a>

---

##### `DeploymentConfigInput`<sup>Optional</sup> <a name="DeploymentConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput"></a>

```go
func DeploymentConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointArnInput`<sup>Optional</sup> <a name="EndpointArnInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArnInput"></a>

```go
func EndpointArnInput() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `InferenceComponentNameInput`<sup>Optional</sup> <a name="InferenceComponentNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentNameInput"></a>

```go
func InferenceComponentNameInput() *string
```

- *Type:* *string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput"></a>

```go
func SpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput"></a>

```go
func VariantNameInput() *string
```

- *Type:* *string

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `InferenceComponentName`<sup>Required</sup> <a name="InferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.inferenceComponentName"></a>

```go
func InferenceComponentName() *string
```

- *Type:* *string

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName"></a>

```go
func VariantName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceComponentConfig <a name="SagemakerInferenceComponentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	Specification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification,
	DeploymentConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig,
	EndpointArn: *string,
	InferenceComponentName: *string,
	RuntimeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig,
	Tags: interface{},
	VariantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint the inference component is associated with. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification">Specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a></code> | The specification for the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a></code> | The deployment config for the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the endpoint the inference component is associated with. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.inferenceComponentName">InferenceComponentName</a></code> | <code>*string</code> | The name of the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a></code> | The runtime config for the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of tags to apply to the resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName">VariantName</a></code> | <code>*string</code> | The name of the endpoint variant the inference component is associated with. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint the inference component is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification"></a>

```go
Specification SagemakerInferenceComponentSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>

The specification for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `DeploymentConfig`<sup>Optional</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig"></a>

```go
DeploymentConfig SagemakerInferenceComponentDeploymentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>

The deployment config for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `EndpointArn`<sup>Optional</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointArn"></a>

```go
EndpointArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the endpoint the inference component is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#endpoint_arn SagemakerInferenceComponent#endpoint_arn}

---

##### `InferenceComponentName`<sup>Optional</sup> <a name="InferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.inferenceComponentName"></a>

```go
InferenceComponentName *string
```

- *Type:* *string

The name of the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#inference_component_name SagemakerInferenceComponent#inference_component_name}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig"></a>

```go
RuntimeConfig SagemakerInferenceComponentRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>

The runtime config for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of tags to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName"></a>

```go
VariantName *string
```

- *Type:* *string

The name of the endpoint variant the inference component is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}

---

### SagemakerInferenceComponentDeploymentConfig <a name="SagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfig {
	AutoRollbackConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration,
	RollingUpdatePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a></code> | The rolling update policy for the inference component. |

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration"></a>

```go
AutoRollbackConfiguration SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}.

---

##### `RollingUpdatePolicy`<sup>Optional</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy"></a>

```go
RollingUpdatePolicy SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

The rolling update policy for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
	Alarms: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms">Alarms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```go
Alarms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}.

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
	AlarmName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">AlarmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}. |

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```go
AlarmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
	MaximumBatchSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize,
	MaximumExecutionTimeoutInSeconds: *f64,
	RollbackMaximumBatchSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize,
	WaitIntervalInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | Capacity size configuration for the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | Capacity size configuration for the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}. |

---

##### `MaximumBatchSize`<sup>Optional</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```go
MaximumBatchSize SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

Capacity size configuration for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```go
MaximumExecutionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}.

---

##### `RollbackMaximumBatchSize`<sup>Optional</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```go
RollbackMaximumBatchSize SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

Capacity size configuration for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}

---

##### `WaitIntervalInSeconds`<sup>Optional</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```go
WaitIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">Value</a></code> | <code>*f64</code> | The number of copies for the inference component. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The number of copies for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">Value</a></code> | <code>*f64</code> | The number of copies for the inference component. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The number of copies for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}

---

### SagemakerInferenceComponentRuntimeConfig <a name="SagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentRuntimeConfig {
	CopyCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount">CopyCount</a></code> | <code>*f64</code> | The number of copies for the inference component. |

---

##### `CopyCount`<sup>Optional</sup> <a name="CopyCount" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount"></a>

```go
CopyCount *f64
```

- *Type:* *f64

The number of copies for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}

---

### SagemakerInferenceComponentSpecification <a name="SagemakerInferenceComponentSpecification" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecification {
	BaseInferenceComponentName: *string,
	ComputeResourceRequirements: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements,
	Container: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer,
	ModelName: *string,
	StartupParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | The name of the base inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container">Container</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName">ModelName</a></code> | <code>*string</code> | The name of the model to use with the inference component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}. |

---

##### `BaseInferenceComponentName`<sup>Optional</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName"></a>

```go
BaseInferenceComponentName *string
```

- *Type:* *string

The name of the base inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}

---

##### `ComputeResourceRequirements`<sup>Optional</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements"></a>

```go
ComputeResourceRequirements SagemakerInferenceComponentSpecificationComputeResourceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container"></a>

```go
Container SagemakerInferenceComponentSpecificationContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

The name of the model to use with the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}

---

##### `StartupParameters`<sup>Optional</sup> <a name="StartupParameters" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters"></a>

```go
StartupParameters SagemakerInferenceComponentSpecificationStartupParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}.

---

### SagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements {
	MaxMemoryRequiredInMb: *f64,
	MinMemoryRequiredInMb: *f64,
	NumberOfAcceleratorDevicesRequired: *f64,
	NumberOfCpuCoresRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `MaxMemoryRequiredInMb`<sup>Optional</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```go
MaxMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `MinMemoryRequiredInMb`<sup>Optional</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```go
MinMemoryRequiredInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```go
NumberOfAcceleratorDevicesRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `NumberOfCpuCoresRequired`<sup>Optional</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```go
NumberOfCpuCoresRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationContainer <a name="SagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationContainer {
	ArtifactUrl: *string,
	Environment: *map[string]*string,
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Environment variables to specify on the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image">Image</a></code> | <code>*string</code> | The image to use for the container that will be materialized for the inference component. |

---

##### `ArtifactUrl`<sup>Optional</sup> <a name="ArtifactUrl" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl"></a>

```go
ArtifactUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Environment variables to specify on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

The image to use for the container that will be materialized for the inference component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}

---

### SagemakerInferenceComponentSpecificationContainerDeployedImage <a name="SagemakerInferenceComponentSpecificationContainerDeployedImage" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationContainerDeployedImage {

}
```


### SagemakerInferenceComponentSpecificationStartupParameters <a name="SagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentSpecificationStartupParameters {
	ContainerStartupHealthCheckTimeoutInSeconds: *f64,
	ModelDataDownloadTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
ContainerStartupHealthCheckTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```go
ModelDataDownloadTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentTags <a name="SagemakerInferenceComponentTags" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

&sagemakerinferencecomponent.SagemakerInferenceComponentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#key SagemakerInferenceComponent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resetAlarmName">ResetAlarmName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resetAlarmName"></a>

```go
func ResetAlarmName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">AlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```go
func AlarmNameInput() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```go
func PutAlarms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```go
func ResetAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```go
func Alarms() SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```go
func AlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigOutputReference <a name="SagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentDeploymentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy">PutRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy">ResetRollingUpdatePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```go
func PutAutoRollbackConfiguration(value SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

---

##### `PutRollingUpdatePolicy` <a name="PutRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```go
func PutRollingUpdatePolicy(value SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

---

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```go
func ResetAutoRollbackConfiguration()
```

##### `ResetRollingUpdatePolicy` <a name="ResetRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```go
func ResetRollingUpdatePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">RollingUpdatePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```go
func AutoRollbackConfiguration() SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```go
func RollingUpdatePolicy() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```go
func AutoRollbackConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RollingUpdatePolicyInput`<sup>Optional</sup> <a name="RollingUpdatePolicyInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```go
func RollingUpdatePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">PutMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">PutRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">ResetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">ResetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">ResetRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetWaitIntervalInSeconds">ResetWaitIntervalInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumBatchSize` <a name="PutMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```go
func PutMaximumBatchSize(value SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `PutRollbackMaximumBatchSize` <a name="PutRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```go
func PutRollbackMaximumBatchSize(value SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `ResetMaximumBatchSize` <a name="ResetMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```go
func ResetMaximumBatchSize()
```

##### `ResetMaximumExecutionTimeoutInSeconds` <a name="ResetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```go
func ResetMaximumExecutionTimeoutInSeconds()
```

##### `ResetRollbackMaximumBatchSize` <a name="ResetRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```go
func ResetRollbackMaximumBatchSize()
```

##### `ResetWaitIntervalInSeconds` <a name="ResetWaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetWaitIntervalInSeconds"></a>

```go
func ResetWaitIntervalInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">MaximumBatchSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">MaximumExecutionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">RollbackMaximumBatchSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">WaitIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```go
func MaximumBatchSize() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```go
func RollbackMaximumBatchSize() SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `MaximumBatchSizeInput`<sup>Optional</sup> <a name="MaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```go
func MaximumBatchSizeInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```go
func MaximumExecutionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="RollbackMaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```go
func RollbackMaximumBatchSizeInput() interface{}
```

- *Type:* interface{}

---

##### `WaitIntervalInSecondsInput`<sup>Optional</sup> <a name="WaitIntervalInSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```go
func WaitIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```go
func MaximumExecutionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```go
func WaitIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentRuntimeConfigOutputReference <a name="SagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resetCopyCount">ResetCopyCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopyCount` <a name="ResetCopyCount" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resetCopyCount"></a>

```go
func ResetCopyCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">CurrentCopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">DesiredCopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput">CopyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">CopyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentCopyCount`<sup>Required</sup> <a name="CurrentCopyCount" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```go
func CurrentCopyCount() *f64
```

- *Type:* *f64

---

##### `DesiredCopyCount`<sup>Required</sup> <a name="DesiredCopyCount" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```go
func DesiredCopyCount() *f64
```

- *Type:* *f64

---

##### `CopyCountInput`<sup>Optional</sup> <a name="CopyCountInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput"></a>

```go
func CopyCountInput() *f64
```

- *Type:* *f64

---

##### `CopyCount`<sup>Required</sup> <a name="CopyCount" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```go
func CopyCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">ResetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMinMemoryRequiredInMb">ResetMinMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">ResetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">ResetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryRequiredInMb` <a name="ResetMaxMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```go
func ResetMaxMemoryRequiredInMb()
```

##### `ResetMinMemoryRequiredInMb` <a name="ResetMinMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMinMemoryRequiredInMb"></a>

```go
func ResetMinMemoryRequiredInMb()
```

##### `ResetNumberOfAcceleratorDevicesRequired` <a name="ResetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```go
func ResetNumberOfAcceleratorDevicesRequired()
```

##### `ResetNumberOfCpuCoresRequired` <a name="ResetNumberOfCpuCoresRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```go
func ResetNumberOfCpuCoresRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">MaxMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">MinMemoryRequiredInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">NumberOfAcceleratorDevicesRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">NumberOfCpuCoresRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MaxMemoryRequiredInMbInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```go
func MaxMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MinMemoryRequiredInMbInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```go
func MinMemoryRequiredInMbInput() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```go
func NumberOfAcceleratorDevicesRequiredInput() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="NumberOfCpuCoresRequiredInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```go
func NumberOfCpuCoresRequiredInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryRequiredInMb`<sup>Required</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```go
func MaxMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```go
func MinMemoryRequiredInMb() *f64
```

- *Type:* *f64

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```go
func NumberOfAcceleratorDevicesRequired() *f64
```

- *Type:* *f64

---

##### `NumberOfCpuCoresRequired`<sup>Required</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```go
func NumberOfCpuCoresRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference <a name="SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolutionTime">ResolutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolvedImage">ResolvedImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.specifiedImage">SpecifiedImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImage">SagemakerInferenceComponentSpecificationContainerDeployedImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolutionTime`<sup>Required</sup> <a name="ResolutionTime" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolutionTime"></a>

```go
func ResolutionTime() *string
```

- *Type:* *string

---

##### `ResolvedImage`<sup>Required</sup> <a name="ResolvedImage" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.resolvedImage"></a>

```go
func ResolvedImage() *string
```

- *Type:* *string

---

##### `SpecifiedImage`<sup>Required</sup> <a name="SpecifiedImage" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.specifiedImage"></a>

```go
func SpecifiedImage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerInferenceComponentSpecificationContainerDeployedImage
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImage">SagemakerInferenceComponentSpecificationContainerDeployedImage</a>

---


### SagemakerInferenceComponentSpecificationContainerOutputReference <a name="SagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentSpecificationContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl">ResetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactUrl` <a name="ResetArtifactUrl" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl"></a>

```go
func ResetArtifactUrl()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.deployedImage">DeployedImage</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference">SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput">ArtifactUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">ArtifactUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedImage`<sup>Required</sup> <a name="DeployedImage" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.deployedImage"></a>

```go
func DeployedImage() SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference">SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference</a>

---

##### `ArtifactUrlInput`<sup>Optional</sup> <a name="ArtifactUrlInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput"></a>

```go
func ArtifactUrlInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ArtifactUrl`<sup>Required</sup> <a name="ArtifactUrl" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```go
func ArtifactUrl() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationOutputReference <a name="SagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements">PutComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters">PutStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName">ResetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements">ResetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters">ResetStartupParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeResourceRequirements` <a name="PutComputeResourceRequirements" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements"></a>

```go
func PutComputeResourceRequirements(value SagemakerInferenceComponentSpecificationComputeResourceRequirements)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer"></a>

```go
func PutContainer(value SagemakerInferenceComponentSpecificationContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>

---

##### `PutStartupParameters` <a name="PutStartupParameters" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters"></a>

```go
func PutStartupParameters(value SagemakerInferenceComponentSpecificationStartupParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>

---

##### `ResetBaseInferenceComponentName` <a name="ResetBaseInferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName"></a>

```go
func ResetBaseInferenceComponentName()
```

##### `ResetComputeResourceRequirements` <a name="ResetComputeResourceRequirements" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements"></a>

```go
func ResetComputeResourceRequirements()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetStartupParameters` <a name="ResetStartupParameters" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters"></a>

```go
func ResetStartupParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference">SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference">SagemakerInferenceComponentSpecificationContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference">SagemakerInferenceComponentSpecificationStartupParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput">BaseInferenceComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput">ComputeResourceRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput">StartupParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirements`<sup>Required</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```go
func ComputeResourceRequirements() SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference">SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```go
func Container() SagemakerInferenceComponentSpecificationContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference">SagemakerInferenceComponentSpecificationContainerOutputReference</a>

---

##### `StartupParameters`<sup>Required</sup> <a name="StartupParameters" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```go
func StartupParameters() SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference">SagemakerInferenceComponentSpecificationStartupParametersOutputReference</a>

---

##### `BaseInferenceComponentNameInput`<sup>Optional</sup> <a name="BaseInferenceComponentNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput"></a>

```go
func BaseInferenceComponentNameInput() *string
```

- *Type:* *string

---

##### `ComputeResourceRequirementsInput`<sup>Optional</sup> <a name="ComputeResourceRequirementsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput"></a>

```go
func ComputeResourceRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `StartupParametersInput`<sup>Optional</sup> <a name="StartupParametersInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput"></a>

```go
func StartupParametersInput() interface{}
```

- *Type:* interface{}

---

##### `BaseInferenceComponentName`<sup>Required</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```go
func BaseInferenceComponentName() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentSpecificationStartupParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```go
func ResetModelDataDownloadTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```go
func ContainerStartupHealthCheckTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```go
func ModelDataDownloadTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```go
func ContainerStartupHealthCheckTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```go
func ModelDataDownloadTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentTagsList <a name="SagemakerInferenceComponentTagsList" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerInferenceComponentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.get"></a>

```go
func Get(index *f64) SagemakerInferenceComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerInferenceComponentTagsOutputReference <a name="SagemakerInferenceComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerinferencecomponent"

sagemakerinferencecomponent.NewSagemakerInferenceComponentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerInferenceComponentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceComponent.SagemakerInferenceComponentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



