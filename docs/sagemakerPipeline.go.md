# `sagemakerPipeline` Submodule <a name="`sagemakerPipeline` Submodule" id="@cdktn/provider-awscc.sagemakerPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPipeline <a name="SagemakerPipeline" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline awscc_sagemaker_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipeline(scope Construct, id *string, config SagemakerPipelineConfig) SagemakerPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration">PutParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putPipelineDefinition">PutPipelineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration">ResetParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription">ResetPipelineDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetPipelineDisplayName">ResetPipelineDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParallelismConfiguration` <a name="PutParallelismConfiguration" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration"></a>

```go
func PutParallelismConfiguration(value SagemakerPipelineParallelismConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `PutPipelineDefinition` <a name="PutPipelineDefinition" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putPipelineDefinition"></a>

```go
func PutPipelineDefinition(value SagemakerPipelinePipelineDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putPipelineDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition">SagemakerPipelinePipelineDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParallelismConfiguration` <a name="ResetParallelismConfiguration" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration"></a>

```go
func ResetParallelismConfiguration()
```

##### `ResetPipelineDescription` <a name="ResetPipelineDescription" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription"></a>

```go
func ResetPipelineDescription()
```

##### `ResetPipelineDisplayName` <a name="ResetPipelineDisplayName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetPipelineDisplayName"></a>

```go
func ResetPipelineDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.SagemakerPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.SagemakerPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.SagemakerPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.SagemakerPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition">PipelineDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference">SagemakerPipelinePipelineDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList">SagemakerPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput">ParallelismConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput">PipelineDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput">PipelineDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput">PipelineDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput">PipelineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription">PipelineDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineName">PipelineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParallelismConfiguration`<sup>Required</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration"></a>

```go
func ParallelismConfiguration() SagemakerPipelineParallelismConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a>

---

##### `PipelineDefinition`<sup>Required</sup> <a name="PipelineDefinition" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition"></a>

```go
func PipelineDefinition() SagemakerPipelinePipelineDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference">SagemakerPipelinePipelineDefinitionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tags"></a>

```go
func Tags() SagemakerPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList">SagemakerPipelineTagsList</a>

---

##### `ParallelismConfigurationInput`<sup>Optional</sup> <a name="ParallelismConfigurationInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput"></a>

```go
func ParallelismConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineDefinitionInput`<sup>Optional</sup> <a name="PipelineDefinitionInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput"></a>

```go
func PipelineDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineDescriptionInput`<sup>Optional</sup> <a name="PipelineDescriptionInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput"></a>

```go
func PipelineDescriptionInput() *string
```

- *Type:* *string

---

##### `PipelineDisplayNameInput`<sup>Optional</sup> <a name="PipelineDisplayNameInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput"></a>

```go
func PipelineDisplayNameInput() *string
```

- *Type:* *string

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput"></a>

```go
func PipelineNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineDescription`<sup>Required</sup> <a name="PipelineDescription" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription"></a>

```go
func PipelineDescription() *string
```

- *Type:* *string

---

##### `PipelineDisplayName`<sup>Required</sup> <a name="PipelineDisplayName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName"></a>

```go
func PipelineDisplayName() *string
```

- *Type:* *string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.pipelineName"></a>

```go
func PipelineName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPipelineConfig <a name="SagemakerPipelineConfig" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

&sagemakerpipeline.SagemakerPipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PipelineDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition,
	PipelineName: *string,
	RoleArn: *string,
	ParallelismConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration,
	PipelineDescription: *string,
	PipelineDisplayName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition">PipelineDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition">SagemakerPipelinePipelineDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName">PipelineName</a></code> | <code>*string</code> | The name of the Pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription">PipelineDescription</a></code> | <code>*string</code> | The description of the Pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>*string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PipelineDefinition`<sup>Required</sup> <a name="PipelineDefinition" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition"></a>

```go
PipelineDefinition SagemakerPipelinePipelineDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition">SagemakerPipelinePipelineDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}.

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName"></a>

```go
PipelineName *string
```

- *Type:* *string

The name of the Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}

---

##### `ParallelismConfiguration`<sup>Optional</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration"></a>

```go
ParallelismConfiguration SagemakerPipelineParallelismConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}.

---

##### `PipelineDescription`<sup>Optional</sup> <a name="PipelineDescription" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription"></a>

```go
PipelineDescription *string
```

- *Type:* *string

The description of the Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}

---

##### `PipelineDisplayName`<sup>Optional</sup> <a name="PipelineDisplayName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName"></a>

```go
PipelineDisplayName *string
```

- *Type:* *string

The display name of the Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}.

---

### SagemakerPipelineParallelismConfiguration <a name="SagemakerPipelineParallelismConfiguration" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

&sagemakerpipeline.SagemakerPipelineParallelismConfiguration {
	MaxParallelExecutionSteps: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>*f64</code> | Maximum parallel execution steps. |

---

##### `MaxParallelExecutionSteps`<sup>Optional</sup> <a name="MaxParallelExecutionSteps" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps"></a>

```go
MaxParallelExecutionSteps *f64
```

- *Type:* *f64

Maximum parallel execution steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}

---

### SagemakerPipelinePipelineDefinition <a name="SagemakerPipelinePipelineDefinition" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

&sagemakerpipeline.SagemakerPipelinePipelineDefinition {
	PipelineDefinitionBody: *string,
	PipelineDefinitionS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition.property.pipelineDefinitionBody">PipelineDefinitionBody</a></code> | <code>*string</code> | A specification that defines the pipeline in JSON format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}. |

---

##### `PipelineDefinitionBody`<sup>Optional</sup> <a name="PipelineDefinitionBody" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition.property.pipelineDefinitionBody"></a>

```go
PipelineDefinitionBody *string
```

- *Type:* *string

A specification that defines the pipeline in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_definition_body SagemakerPipeline#pipeline_definition_body}

---

##### `PipelineDefinitionS3Location`<sup>Optional</sup> <a name="PipelineDefinitionS3Location" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinition.property.pipelineDefinitionS3Location"></a>

```go
PipelineDefinitionS3Location SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}.

---

### SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location <a name="SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

&sagemakerpipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location {
	Bucket: *string,
	ETag: *string,
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the S3 bucket where the PipelineDefinition file is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.eTag">ETag</a></code> | <code>*string</code> | The Amazon S3 ETag (a file checksum) of the PipelineDefinition file. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.key">Key</a></code> | <code>*string</code> | The file name of the PipelineDefinition file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.version">Version</a></code> | <code>*string</code> | For versioning-enabled buckets, a specific version of the PipelineDefinition file. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the S3 bucket where the PipelineDefinition file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}

---

##### `ETag`<sup>Optional</sup> <a name="ETag" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.eTag"></a>

```go
ETag *string
```

- *Type:* *string

The Amazon S3 ETag (a file checksum) of the PipelineDefinition file.

If you don't specify a value, SageMaker skips ETag validation of your PipelineDefinition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#e_tag SagemakerPipeline#e_tag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

The file name of the PipelineDefinition file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#key SagemakerPipeline#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

For versioning-enabled buckets, a specific version of the PipelineDefinition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#version SagemakerPipeline#version}

---

### SagemakerPipelineTags <a name="SagemakerPipelineTags" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

&sagemakerpipeline.SagemakerPipelineTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#key SagemakerPipeline#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#value SagemakerPipeline#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#key SagemakerPipeline#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_pipeline#value SagemakerPipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPipelineParallelismConfigurationOutputReference <a name="SagemakerPipelineParallelismConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipelineParallelismConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerPipelineParallelismConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resetMaxParallelExecutionSteps">ResetMaxParallelExecutionSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxParallelExecutionSteps` <a name="ResetMaxParallelExecutionSteps" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resetMaxParallelExecutionSteps"></a>

```go
func ResetMaxParallelExecutionSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput">MaxParallelExecutionStepsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxParallelExecutionStepsInput`<sup>Optional</sup> <a name="MaxParallelExecutionStepsInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput"></a>

```go
func MaxParallelExecutionStepsInput() *f64
```

- *Type:* *f64

---

##### `MaxParallelExecutionSteps`<sup>Required</sup> <a name="MaxParallelExecutionSteps" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps"></a>

```go
func MaxParallelExecutionSteps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerPipelinePipelineDefinitionOutputReference <a name="SagemakerPipelinePipelineDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipelinePipelineDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerPipelinePipelineDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.putPipelineDefinitionS3Location">PutPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resetPipelineDefinitionBody">ResetPipelineDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resetPipelineDefinitionS3Location">ResetPipelineDefinitionS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineDefinitionS3Location` <a name="PutPipelineDefinitionS3Location" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.putPipelineDefinitionS3Location"></a>

```go
func PutPipelineDefinitionS3Location(value SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.putPipelineDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location</a>

---

##### `ResetPipelineDefinitionBody` <a name="ResetPipelineDefinitionBody" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resetPipelineDefinitionBody"></a>

```go
func ResetPipelineDefinitionBody()
```

##### `ResetPipelineDefinitionS3Location` <a name="ResetPipelineDefinitionS3Location" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.resetPipelineDefinitionS3Location"></a>

```go
func ResetPipelineDefinitionS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionBodyInput">PipelineDefinitionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionS3LocationInput">PipelineDefinitionS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionBody">PipelineDefinitionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineDefinitionS3Location`<sup>Required</sup> <a name="PipelineDefinitionS3Location" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionS3Location"></a>

```go
func PipelineDefinitionS3Location() SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference</a>

---

##### `PipelineDefinitionBodyInput`<sup>Optional</sup> <a name="PipelineDefinitionBodyInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionBodyInput"></a>

```go
func PipelineDefinitionBodyInput() *string
```

- *Type:* *string

---

##### `PipelineDefinitionS3LocationInput`<sup>Optional</sup> <a name="PipelineDefinitionS3LocationInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionS3LocationInput"></a>

```go
func PipelineDefinitionS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineDefinitionBody`<sup>Required</sup> <a name="PipelineDefinitionBody" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.pipelineDefinitionBody"></a>

```go
func PipelineDefinitionBody() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference <a name="SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetETag">ResetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetETag` <a name="ResetETag" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetETag"></a>

```go
func ResetETag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.eTagInput">ETagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ETagInput`<sup>Optional</sup> <a name="ETagInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.eTagInput"></a>

```go
func ETagInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerPipelineTagsList <a name="SagemakerPipelineTagsList" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerPipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.get"></a>

```go
func Get(index *f64) SagemakerPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerPipelineTagsOutputReference <a name="SagemakerPipelineTagsOutputReference" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerpipeline"

sagemakerpipeline.NewSagemakerPipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerPipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerPipeline.SagemakerPipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



