# `chimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`chimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaPipelineKinesisVideoStreamPool <a name="ChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.NewChimeMediaPipelineKinesisVideoStreamPool(scope Construct, id *string, config ChimeMediaPipelineKinesisVideoStreamPoolConfig) ChimeMediaPipelineKinesisVideoStreamPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration">PutStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamConfiguration` <a name="PutStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration"></a>

```go
func PutStreamConfiguration(value ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">PoolStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">StreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput">PoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput">StreamConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName">PoolName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `PoolStatus`<sup>Required</sup> <a name="PoolStatus" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```go
func PoolStatus() *string
```

- *Type:* *string

---

##### `StreamConfiguration`<sup>Required</sup> <a name="StreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```go
func StreamConfiguration() ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```go
func Tags() ChimeMediaPipelineKinesisVideoStreamPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput"></a>

```go
func PoolNameInput() *string
```

- *Type:* *string

---

##### `StreamConfigurationInput`<sup>Optional</sup> <a name="StreamConfigurationInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput"></a>

```go
func StreamConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```go
func PoolName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="ChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

&chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PoolName: *string,
	StreamConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName">PoolName</a></code> | <code>*string</code> | The name of the Kinesis Video Stream Pool. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration">StreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | The configuration settings for the Kinesis video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the Kinesis Video Stream Pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName"></a>

```go
PoolName *string
```

- *Type:* *string

The name of the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}

---

##### `StreamConfiguration`<sup>Required</sup> <a name="StreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration"></a>

```go
StreamConfiguration ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

The configuration settings for the Kinesis video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}

---

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

&chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration {
	Region: *string,
	DataRetentionInHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region">Region</a></code> | <code>*string</code> | The AWS Region of the video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>*f64</code> | The amount of time that data is retained, in hours. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS Region of the video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#region ChimeMediaPipelineKinesisVideoStreamPool#region}

---

##### `DataRetentionInHours`<sup>Optional</sup> <a name="DataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours"></a>

```go
DataRetentionInHours *f64
```

- *Type:* *f64

The amount of time that data is retained, in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#data_retention_in_hours ChimeMediaPipelineKinesisVideoStreamPool#data_retention_in_hours}

---

### ChimeMediaPipelineKinesisVideoStreamPoolTags <a name="ChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

&chimemediapipelinekinesisvideostreampool.ChimeMediaPipelineKinesisVideoStreamPoolTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.NewChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours">ResetDataRetentionInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataRetentionInHours` <a name="ResetDataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours"></a>

```go
func ResetDataRetentionInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput">DataRetentionInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataRetentionInHoursInput`<sup>Optional</sup> <a name="DataRetentionInHoursInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput"></a>

```go
func DataRetentionInHoursInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `DataRetentionInHours`<sup>Required</sup> <a name="DataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```go
func DataRetentionInHours() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.NewChimeMediaPipelineKinesisVideoStreamPoolTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeMediaPipelineKinesisVideoStreamPoolTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```go
func Get(index *f64) ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimemediapipelinekinesisvideostreampool"

chimemediapipelinekinesisvideostreampool.NewChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



