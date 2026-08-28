# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktn/provider-awscc.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model awscc_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModel(scope Construct, id *string, config SagemakerModelConfig) SagemakerModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">PutInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer">PutPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">ResetInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetPrimaryContainer">ResetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainers` <a name="PutContainers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInferenceExecutionConfig` <a name="PutInferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```go
func PutInferenceExecutionConfig(value SagemakerModelInferenceExecutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `PutPrimaryContainer` <a name="PutPrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```go
func PutPrimaryContainer(value SagemakerModelPrimaryContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerModelVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `ResetContainers` <a name="ResetContainers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetInferenceExecutionConfig` <a name="ResetInferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```go
func ResetInferenceExecutionConfig()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetPrimaryContainer` <a name="ResetPrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```go
func ResetPrimaryContainer()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.SagemakerModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.SagemakerModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.SagemakerModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.SagemakerModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList">SagemakerModelContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList">SagemakerModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">InferenceExecutionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainerInput">PrimaryContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containers"></a>

```go
func Containers() SagemakerModelContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList">SagemakerModelContainersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InferenceExecutionConfig`<sup>Required</sup> <a name="InferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```go
func InferenceExecutionConfig() SagemakerModelInferenceExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```go
func PrimaryContainer() SagemakerModelPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tags"></a>

```go
func Tags() SagemakerModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList">SagemakerModelTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerModelVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `InferenceExecutionConfigInput`<sup>Optional</sup> <a name="InferenceExecutionConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```go
func InferenceExecutionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `PrimaryContainerInput`<sup>Optional</sup> <a name="PrimaryContainerInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```go
func PrimaryContainerInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Containers: interface{},
	EnableNetworkIsolation: interface{},
	ExecutionRoleArn: *string,
	InferenceExecutionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig,
	ModelName: *string,
	PrimaryContainer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainer,
	Tags: interface{},
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.containers">Containers</a></code> | <code>interface{}</code> | Specifies the containers in the inference pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Isolates the model container. No inbound or outbound network calls can be made to or from the model container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that you specified for the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | Specifies details about how containers in a multi-container endpoint are run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.modelName">ModelName</a></code> | <code>*string</code> | The name of the new model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | Describes the container, as part of model definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

Specifies the containers in the inference pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#containers SagemakerModel#containers}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Isolates the model container. No inbound or outbound network calls can be made to or from the model container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that you specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}

---

##### `InferenceExecutionConfig`<sup>Optional</sup> <a name="InferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```go
InferenceExecutionConfig SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

Specifies details about how containers in a multi-container endpoint are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

The name of the new model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_name SagemakerModel#model_name}

---

##### `PrimaryContainer`<sup>Optional</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```go
PrimaryContainer SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

Describes the container, as part of model definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs.

You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainers <a name="SagemakerModelContainers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainers {
	ContainerHostname: *string,
	Environment: *string,
	Image: *string,
	ImageConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersImageConfig,
	InferenceSpecificationName: *string,
	Mode: *string,
	ModelDataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersModelDataSource,
	ModelDataUrl: *string,
	ModelPackageName: *string,
	MultiModelConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | This parameter is ignored for models that contain only a PrimaryContainer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.environment">Environment</a></code> | <code>*string</code> | The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.image">Image</a></code> | <code>*string</code> | The path where inference code is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a></code> | Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | The inference specification name in the model package version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.mode">Mode</a></code> | <code>*string</code> | Whether the container hosts a single model or multiple models. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a></code> | Specifies the location of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | The S3 path where the model artifacts, which result from model training, are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | The name or Amazon Resource Name (ARN) of the model package to use to create the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a></code> | Specifies additional configuration for multi-model endpoints. |

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.containerHostname"></a>

```go
ContainerHostname *string
```

- *Type:* *string

This parameter is ignored for models that contain only a PrimaryContainer.

When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.

The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

The path where inference code is stored.

This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#image SagemakerModel#image}

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.imageConfig"></a>

```go
ImageConfig SagemakerModelContainersImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a>

Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.inferenceSpecificationName"></a>

```go
InferenceSpecificationName *string
```

- *Type:* *string

The inference specification name in the model package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Whether the container hosts a single model or multiple models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataSource"></a>

```go
ModelDataSource SagemakerModelContainersModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a>

Specifies the location of ML model data to deploy.

If specified, you must specify one and only one of the available data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataUrl"></a>

```go
ModelDataUrl *string
```

- *Type:* *string

The S3 path where the model artifacts, which result from model training, are stored.

This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).

If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelPackageName"></a>

```go
ModelPackageName *string
```

- *Type:* *string

The name or Amazon Resource Name (ARN) of the model package to use to create the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.multiModelConfig"></a>

```go
MultiModelConfig SagemakerModelContainersMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a>

Specifies additional configuration for multi-model endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelContainersImageConfig <a name="SagemakerModelContainersImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersImageConfig {
	RepositoryAccessMode: *string,
	RepositoryAuthConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | Specifies an authentication configuration for the private docker registry where your model image is hosted. |

---

##### `RepositoryAccessMode`<sup>Optional</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAccessMode"></a>

```go
RepositoryAccessMode *string
```

- *Type:* *string

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAuthConfig"></a>

```go
RepositoryAuthConfig SagemakerModelContainersImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelContainersImageConfigRepositoryAuthConfig <a name="SagemakerModelContainersImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersImageConfigRepositoryAuthConfig {
	RepositoryCredentialsProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. |

---

##### `RepositoryCredentialsProviderArn`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```go
RepositoryCredentialsProviderArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

### SagemakerModelContainersModelDataSource <a name="SagemakerModelContainersModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersModelDataSource {
	S3DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a></code> | Specifies the S3 location of ML model data to deploy. |

---

##### `S3DataSource`<sup>Optional</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.property.s3DataSource"></a>

```go
S3DataSource SagemakerModelContainersModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelContainersModelDataSourceS3DataSource <a name="SagemakerModelContainersModelDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersModelDataSourceS3DataSource {
	CompressionType: *string,
	HubAccessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig,
	S3DataType: *string,
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Specifies how the ML model data is prepared. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | Configuration information specifying which hub contents have accessible deployment options. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | The access configuration file to control access to the ML model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Specifies the type of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Specifies the S3 path of ML model data to deploy. |

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

##### `HubAccessConfig`<sup>Optional</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.hubAccessConfig"></a>

```go
HubAccessConfig SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

##### `S3DataType`<sup>Optional</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

### SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig <a name="SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig {
	HubContentArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | The ARN of the hub content for which deployment access is allowed. |

---

##### `HubContentArn`<sup>Optional</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn"></a>

```go
HubContentArn *string
```

- *Type:* *string

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

### SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Specifies agreement to the model end-user license agreement (EULA). |

---

##### `AcceptEula`<sup>Optional</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

### SagemakerModelContainersMultiModelConfig <a name="SagemakerModelContainersMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelContainersMultiModelConfig {
	ModelCacheSetting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | Whether to cache models for a multi-model endpoint. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.property.modelCacheSetting"></a>

```go
ModelCacheSetting *string
```

- *Type:* *string

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelInferenceExecutionConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">Mode</a></code> | <code>*string</code> | How containers in a multi-container are run. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

How containers in a multi-container are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainer {
	ContainerHostname: *string,
	Environment: *string,
	Image: *string,
	ImageConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig,
	InferenceSpecificationName: *string,
	Mode: *string,
	ModelDataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource,
	ModelDataUrl: *string,
	ModelPackageName: *string,
	MultiModelConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | This parameter is ignored for models that contain only a PrimaryContainer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">Environment</a></code> | <code>*string</code> | The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.image">Image</a></code> | <code>*string</code> | The path where inference code is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | The inference specification name in the model package version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">Mode</a></code> | <code>*string</code> | Whether the container hosts a single model or multiple models. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | Specifies the location of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | The S3 path where the model artifacts, which result from model training, are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | The name or Amazon Resource Name (ARN) of the model package to use to create the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | Specifies additional configuration for multi-model endpoints. |

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```go
ContainerHostname *string
```

- *Type:* *string

This parameter is ignored for models that contain only a PrimaryContainer.

When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.

The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

The path where inference code is stored.

This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#image SagemakerModel#image}

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```go
ImageConfig SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName"></a>

```go
InferenceSpecificationName *string
```

- *Type:* *string

The inference specification name in the model package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Whether the container hosts a single model or multiple models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource"></a>

```go
ModelDataSource SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

Specifies the location of ML model data to deploy.

If specified, you must specify one and only one of the available data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```go
ModelDataUrl *string
```

- *Type:* *string

The S3 path where the model artifacts, which result from model training, are stored.

This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).

If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName"></a>

```go
ModelPackageName *string
```

- *Type:* *string

The name or Amazon Resource Name (ARN) of the model package to use to create the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig"></a>

```go
MultiModelConfig SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

Specifies additional configuration for multi-model endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerImageConfig {
	RepositoryAccessMode: *string,
	RepositoryAuthConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | Specifies an authentication configuration for the private docker registry where your model image is hosted. |

---

##### `RepositoryAccessMode`<sup>Optional</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```go
RepositoryAccessMode *string
```

- *Type:* *string

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig"></a>

```go
RepositoryAuthConfig SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {
	RepositoryCredentialsProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. |

---

##### `RepositoryCredentialsProviderArn`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```go
RepositoryCredentialsProviderArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

### SagemakerModelPrimaryContainerModelDataSource <a name="SagemakerModelPrimaryContainerModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSource {
	S3DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | Specifies the S3 location of ML model data to deploy. |

---

##### `S3DataSource`<sup>Optional</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource"></a>

```go
S3DataSource SagemakerModelPrimaryContainerModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource {
	CompressionType: *string,
	HubAccessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig,
	ModelAccessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig,
	S3DataType: *string,
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>*string</code> | Specifies how the ML model data is prepared. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | Configuration information specifying which hub contents have accessible deployment options. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | The access configuration file to control access to the ML model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>*string</code> | Specifies the type of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Specifies the S3 path of ML model data to deploy. |

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

##### `HubAccessConfig`<sup>Optional</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.hubAccessConfig"></a>

```go
HubAccessConfig SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```go
ModelAccessConfig SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

##### `S3DataType`<sup>Optional</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```go
S3DataType *string
```

- *Type:* *string

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig {
	HubContentArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | The ARN of the hub content for which deployment access is allowed. |

---

##### `HubContentArn`<sup>Optional</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn"></a>

```go
HubContentArn *string
```

- *Type:* *string

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
	AcceptEula: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | Specifies agreement to the model end-user license agreement (EULA). |

---

##### `AcceptEula`<sup>Optional</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```go
AcceptEula interface{}
```

- *Type:* interface{}

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

### SagemakerModelPrimaryContainerMultiModelConfig <a name="SagemakerModelPrimaryContainerMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelPrimaryContainerMultiModelConfig {
	ModelCacheSetting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | Whether to cache models for a multi-model endpoint. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting"></a>

```go
ModelCacheSetting *string
```

- *Type:* *string

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

### SagemakerModelTags <a name="SagemakerModelTags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.key">Key</a></code> | <code>*string</code> | The tag value. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.value">Value</a></code> | <code>*string</code> | The tag key. Tag keys must be unique per resource. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#key SagemakerModel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#value SagemakerModel#value}

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

&sagemakermodel.SagemakerModelVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The VPC security group IDs, in the form `sg-xxxxxxxx`. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The VPC security group IDs, in the form `sg-xxxxxxxx`.

Specify the security groups for the VPC that is specified in the `Subnets` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainersImageConfigOutputReference <a name="SagemakerModelContainersImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAccessMode">ResetRepositoryAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig"></a>

```go
func PutRepositoryAuthConfig(value SagemakerModelContainersImageConfigRepositoryAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAccessMode` <a name="ResetRepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAccessMode"></a>

```go
func ResetRepositoryAccessMode()
```

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```go
func ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```go
func RepositoryAccessModeInput() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```go
func RepositoryAuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn">ResetRepositoryCredentialsProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositoryCredentialsProviderArn` <a name="ResetRepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn"></a>

```go
func ResetRepositoryCredentialsProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```go
func RepositoryCredentialsProviderArnInput() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersList <a name="SagemakerModelContainersList" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get"></a>

```go
func Get(index *f64) SagemakerModelContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersModelDataSourceOutputReference <a name="SagemakerModelContainersModelDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resetS3DataSource">ResetS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value SagemakerModelContainersModelDataSourceS3DataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

---

##### `ResetS3DataSource` <a name="ResetS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resetS3DataSource"></a>

```go
func ResetS3DataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelContainersModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn">ResetHubContentArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHubContentArn` <a name="ResetHubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn"></a>

```go
func ResetHubContentArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput">HubContentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubContentArnInput`<sup>Optional</sup> <a name="HubContentArnInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput"></a>

```go
func HubContentArnInput() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula">ResetAcceptEula</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptEula` <a name="ResetAcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula"></a>

```go
func ResetAcceptEula()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig">PutHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig">ResetHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3DataType">ResetS3DataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHubAccessConfig` <a name="PutHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig"></a>

```go
func PutHubAccessConfig(value SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

---

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetHubAccessConfig` <a name="ResetHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig"></a>

```go
func ResetHubAccessConfig()
```

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```

##### `ResetS3DataType` <a name="ResetS3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3DataType"></a>

```go
func ResetS3DataType()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput">HubAccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubAccessConfig`<sup>Required</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```go
func HubAccessConfig() SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `HubAccessConfigInput`<sup>Optional</sup> <a name="HubAccessConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput"></a>

```go
func HubAccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersMultiModelConfigOutputReference <a name="SagemakerModelContainersMultiModelConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelContainersMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```go
func ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```go
func ModelCacheSettingInput() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelContainersOutputReference <a name="SagemakerModelContainersOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig"></a>

```go
func PutImageConfig(value SagemakerModelContainersImageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource"></a>

```go
func PutModelDataSource(value SagemakerModelContainersModelDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig"></a>

```go
func PutMultiModelConfig(value SagemakerModelContainersMultiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a>

---

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetContainerHostname"></a>

```go
func ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImageConfig"></a>

```go
func ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetInferenceSpecificationName"></a>

```go
func ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataSource"></a>

```go
func ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataUrl"></a>

```go
func ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelPackageName"></a>

```go
func ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMultiModelConfig"></a>

```go
func ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference">SagemakerModelContainersImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference">SagemakerModelContainersModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference">SagemakerModelContainersMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfig"></a>

```go
func ImageConfig() SagemakerModelContainersImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference">SagemakerModelContainersImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() SagemakerModelContainersModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference">SagemakerModelContainersModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() SagemakerModelContainersMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference">SagemakerModelContainersMultiModelConfigOutputReference</a>

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostnameInput"></a>

```go
func ContainerHostnameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfigInput"></a>

```go
func ImageConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationNameInput"></a>

```go
func InferenceSpecificationNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSourceInput"></a>

```go
func ModelDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrlInput"></a>

```go
func ModelDataUrlInput() *string
```

- *Type:* *string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageNameInput"></a>

```go
func ModelPackageNameInput() *string
```

- *Type:* *string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfigInput"></a>

```go
func MultiModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelInferenceExecutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelInferenceExecutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAccessMode">ResetRepositoryAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```go
func PutRepositoryAuthConfig(value SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAccessMode` <a name="ResetRepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAccessMode"></a>

```go
func ResetRepositoryAccessMode()
```

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```go
func ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```go
func RepositoryAccessModeInput() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```go
func RepositoryAuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn">ResetRepositoryCredentialsProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositoryCredentialsProviderArn` <a name="ResetRepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn"></a>

```go
func ResetRepositoryCredentialsProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```go
func RepositoryCredentialsProviderArnInput() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resetS3DataSource">ResetS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource"></a>

```go
func PutS3DataSource(value SagemakerModelPrimaryContainerModelDataSourceS3DataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

---

##### `ResetS3DataSource` <a name="ResetS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resetS3DataSource"></a>

```go
func ResetS3DataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```go
func S3DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn">ResetHubContentArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHubContentArn` <a name="ResetHubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn"></a>

```go
func ResetHubContentArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput">HubContentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubContentArnInput`<sup>Optional</sup> <a name="HubContentArnInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput"></a>

```go
func HubContentArnInput() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula">ResetAcceptEula</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptEula` <a name="ResetAcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula"></a>

```go
func ResetAcceptEula()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```go
func AcceptEulaInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig">PutHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig">ResetHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3DataType">ResetS3DataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHubAccessConfig` <a name="PutHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig"></a>

```go
func PutHubAccessConfig(value SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

---

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```go
func PutModelAccessConfig(value SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetHubAccessConfig` <a name="ResetHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig"></a>

```go
func ResetHubAccessConfig()
```

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```go
func ResetModelAccessConfig()
```

##### `ResetS3DataType` <a name="ResetS3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3DataType"></a>

```go
func ResetS3DataType()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput">HubAccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubAccessConfig`<sup>Required</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```go
func HubAccessConfig() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `HubAccessConfigInput`<sup>Optional</sup> <a name="HubAccessConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput"></a>

```go
func HubAccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```go
func ModelAccessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```go
func S3DataTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="SagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```go
func ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```go
func ModelCacheSettingInput() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelPrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelPrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```go
func PutImageConfig(value SagemakerModelPrimaryContainerImageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource"></a>

```go
func PutModelDataSource(value SagemakerModelPrimaryContainerModelDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig"></a>

```go
func PutMultiModelConfig(value SagemakerModelPrimaryContainerMultiModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```go
func ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```go
func ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName"></a>

```go
func ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource"></a>

```go
func ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```go
func ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName"></a>

```go
func ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig"></a>

```go
func ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```go
func ImageConfig() SagemakerModelPrimaryContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() SagemakerModelPrimaryContainerModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() SagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```go
func ContainerHostnameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```go
func ImageConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```go
func InferenceSpecificationNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput"></a>

```go
func ModelDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```go
func ModelDataUrlInput() *string
```

- *Type:* *string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput"></a>

```go
func ModelPackageNameInput() *string
```

- *Type:* *string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput"></a>

```go
func MultiModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelTagsList <a name="SagemakerModelTagsList" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerModelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get"></a>

```go
func Get(index *f64) SagemakerModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelTagsOutputReference <a name="SagemakerModelTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerModelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermodel"

sagemakermodel.NewSagemakerModelVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerModelVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



