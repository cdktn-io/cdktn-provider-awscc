# `datapipelinePipeline` Submodule <a name="`datapipelinePipeline` Submodule" id="@cdktn/provider-awscc.datapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipeline <a name="DatapipelinePipeline" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipeline(scope Construct, id *string, config DatapipelinePipelineConfig) DatapipelinePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects">PutParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues">PutParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects">PutPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags">PutPipelineTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate">ResetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects">ResetParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues">ResetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects">ResetPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags">ResetPipelineTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameterObjects` <a name="PutParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects"></a>

```go
func PutParameterObjects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameterValues` <a name="PutParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues"></a>

```go
func PutParameterValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPipelineObjects` <a name="PutPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects"></a>

```go
func PutPipelineObjects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPipelineTags` <a name="PutPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags"></a>

```go
func PutPipelineTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActivate` <a name="ResetActivate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate"></a>

```go
func ResetActivate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetParameterObjects` <a name="ResetParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects"></a>

```go
func ResetParameterObjects()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues"></a>

```go
func ResetParameterValues()
```

##### `ResetPipelineObjects` <a name="ResetPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects"></a>

```go
func ResetPipelineObjects()
```

##### `ResetPipelineTags` <a name="ResetPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags"></a>

```go
func ResetPipelineTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.DatapipelinePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.DatapipelinePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.DatapipelinePipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.DatapipelinePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatapipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects">ParameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues">ParameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects">PipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags">PipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput">ActivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput">ParameterObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput">PipelineObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput">PipelineTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate">Activate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterObjects`<sup>Required</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects"></a>

```go
func ParameterObjects() DatapipelinePipelineParameterObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a>

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues"></a>

```go
func ParameterValues() DatapipelinePipelineParameterValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `PipelineObjects`<sup>Required</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects"></a>

```go
func PipelineObjects() DatapipelinePipelinePipelineObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a>

---

##### `PipelineTags`<sup>Required</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags"></a>

```go
func PipelineTags() DatapipelinePipelinePipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a>

---

##### `ActivateInput`<sup>Optional</sup> <a name="ActivateInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput"></a>

```go
func ActivateInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterObjectsInput`<sup>Optional</sup> <a name="ParameterObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput"></a>

```go
func ParameterObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput"></a>

```go
func ParameterValuesInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineObjectsInput`<sup>Optional</sup> <a name="PipelineObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput"></a>

```go
func PipelineObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineTagsInput`<sup>Optional</sup> <a name="PipelineTagsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput"></a>

```go
func PipelineTagsInput() interface{}
```

- *Type:* interface{}

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate"></a>

```go
func Activate() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineConfig <a name="DatapipelinePipelineConfig" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Activate: interface{},
	Description: *string,
	ParameterObjects: interface{},
	ParameterValues: interface{},
	PipelineObjects: interface{},
	PipelineTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name">Name</a></code> | <code>*string</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate">Activate</a></code> | <code>interface{}</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description">Description</a></code> | <code>*string</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects">ParameterObjects</a></code> | <code>interface{}</code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues">ParameterValues</a></code> | <code>interface{}</code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects">PipelineObjects</a></code> | <code>interface{}</code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags">PipelineTags</a></code> | <code>interface{}</code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `Activate`<sup>Optional</sup> <a name="Activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate"></a>

```go
Activate interface{}
```

- *Type:* interface{}

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `ParameterObjects`<sup>Optional</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects"></a>

```go
ParameterObjects interface{}
```

- *Type:* interface{}

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues"></a>

```go
ParameterValues interface{}
```

- *Type:* interface{}

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `PipelineObjects`<sup>Optional</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects"></a>

```go
PipelineObjects interface{}
```

- *Type:* interface{}

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `PipelineTags`<sup>Optional</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags"></a>

```go
PipelineTags interface{}
```

- *Type:* interface{}

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

### DatapipelinePipelineParameterObjects <a name="DatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelineParameterObjects {
	Attributes: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes">Attributes</a></code> | <code>interface{}</code> | The attributes of the parameter object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id">Id</a></code> | <code>*string</code> | The ID of the parameter object. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes"></a>

```go
Attributes interface{}
```

- *Type:* interface{}

The attributes of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#attributes DatapipelinePipeline#attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatapipelinePipelineParameterObjectsAttributes <a name="DatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelineParameterObjectsAttributes {
	Key: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key">Key</a></code> | <code>*string</code> | The field identifier. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue">StringValue</a></code> | <code>*string</code> | The field value, expressed as a String. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

The field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelineParameterValues <a name="DatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelineParameterValues {
	Id: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id">Id</a></code> | <code>*string</code> | The ID of the parameter value. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue">StringValue</a></code> | <code>*string</code> | The field value, expressed as a String. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineObjects <a name="DatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelinePipelineObjects {
	Fields: interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields">Fields</a></code> | <code>interface{}</code> | Key-value pairs that define the properties of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id">Id</a></code> | <code>*string</code> | The ID of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name">Name</a></code> | <code>*string</code> | The name of the object. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

Key-value pairs that define the properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#fields DatapipelinePipeline#fields}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

### DatapipelinePipelinePipelineObjectsFields <a name="DatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelinePipelineObjectsFields {
	Key: *string,
	RefValue: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key">Key</a></code> | <code>*string</code> | Specifies the name of a field for a particular object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue">RefValue</a></code> | <code>*string</code> | A field value that you specify as an identifier of another object in the same pipeline definition. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue">StringValue</a></code> | <code>*string</code> | A field value that you specify as a string. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key"></a>

```go
Key *string
```

- *Type:* *string

Specifies the name of a field for a particular object.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `RefValue`<sup>Optional</sup> <a name="RefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue"></a>

```go
RefValue *string
```

- *Type:* *string

A field value that you specify as an identifier of another object in the same pipeline definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#ref_value DatapipelinePipeline#ref_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

A field value that you specify as a string.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineTags <a name="DatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

&datapipelinepipeline.DatapipelinePipelinePipelineTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key">Key</a></code> | <code>*string</code> | The key name of a tag. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value">Value</a></code> | <code>*string</code> | The value to associate with the key name. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to associate with the key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datapipeline_pipeline#value DatapipelinePipeline#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineParameterObjectsAttributesList <a name="DatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterObjectsAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineParameterObjectsAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineParameterObjectsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterObjectsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineParameterObjectsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineParameterObjectsList <a name="DatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineParameterObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineParameterObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineParameterObjectsOutputReference <a name="DatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineParameterObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes"></a>

```go
func PutAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```go
func Attributes() DatapipelinePipelineParameterObjectsAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineParameterValuesList <a name="DatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineParameterValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineParameterValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineParameterValuesOutputReference <a name="DatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelineParameterValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineParameterValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineObjectsFieldsList <a name="DatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineObjectsFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelinePipelineObjectsFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```go
func Get(index *f64) DatapipelinePipelinePipelineObjectsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineObjectsFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelinePipelineObjectsFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue">ResetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetRefValue` <a name="ResetRefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue"></a>

```go
func ResetRefValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput">RefValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">RefValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RefValueInput`<sup>Optional</sup> <a name="RefValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput"></a>

```go
func RefValueInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```go
func RefValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineObjectsList <a name="DatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelinePipelineObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get"></a>

```go
func Get(index *f64) DatapipelinePipelinePipelineObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineObjectsOutputReference <a name="DatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelinePipelineObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```go
func Fields() DatapipelinePipelinePipelineObjectsFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineTagsList <a name="DatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelinePipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get"></a>

```go
func Get(index *f64) DatapipelinePipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelinePipelineTagsOutputReference <a name="DatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datapipelinepipeline"

datapipelinepipeline.NewDatapipelinePipelinePipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelinePipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



