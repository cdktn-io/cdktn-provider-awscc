# `lambdaMicrovmImage` Submodule <a name="`lambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.lambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaMicrovmImage <a name="LambdaMicrovmImage" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImage(scope Construct, id *string, config LambdaMicrovmImageConfig) LambdaMicrovmImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact">PutCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations">PutCpuConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks">PutHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodeArtifact` <a name="PutCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact"></a>

```go
func PutCodeArtifact(value LambdaMicrovmImageCodeArtifact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `PutCpuConfigurations` <a name="PutCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations"></a>

```go
func PutCpuConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables"></a>

```go
func PutEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHooks` <a name="PutHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks"></a>

```go
func PutHooks(value LambdaMicrovmImageHooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging"></a>

```go
func PutLogging(value LambdaMicrovmImageLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.LambdaMicrovmImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.LambdaMicrovmImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.LambdaMicrovmImage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.LambdaMicrovmImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaMicrovmImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations">CpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion">LatestActiveImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion">LatestFailedImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput">AdditionalOsCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput">BaseImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput">BaseImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput">BuildRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput">CodeArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput">CpuConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput">EgressNetworkConnectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput">HooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput">LoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn">BaseImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion">BaseImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn">BuildRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact"></a>

```go
func CodeArtifact() LambdaMicrovmImageCodeArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `CpuConfigurations`<sup>Required</sup> <a name="CpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations"></a>

```go
func CpuConfigurations() LambdaMicrovmImageCpuConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables"></a>

```go
func EnvironmentVariables() LambdaMicrovmImageEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks"></a>

```go
func Hooks() LambdaMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `LatestActiveImageVersion`<sup>Required</sup> <a name="LatestActiveImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion"></a>

```go
func LatestActiveImageVersion() *string
```

- *Type:* *string

---

##### `LatestFailedImageVersion`<sup>Required</sup> <a name="LatestFailedImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion"></a>

```go
func LatestFailedImageVersion() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging"></a>

```go
func Logging() LambdaMicrovmImageLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources"></a>

```go
func Resources() LambdaMicrovmImageResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags"></a>

```go
func Tags() LambdaMicrovmImageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AdditionalOsCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalOsCapabilitiesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput"></a>

```go
func AdditionalOsCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImageArnInput`<sup>Optional</sup> <a name="BaseImageArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput"></a>

```go
func BaseImageArnInput() *string
```

- *Type:* *string

---

##### `BaseImageVersionInput`<sup>Optional</sup> <a name="BaseImageVersionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput"></a>

```go
func BaseImageVersionInput() *string
```

- *Type:* *string

---

##### `BuildRoleArnInput`<sup>Optional</sup> <a name="BuildRoleArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput"></a>

```go
func BuildRoleArnInput() *string
```

- *Type:* *string

---

##### `CodeArtifactInput`<sup>Optional</sup> <a name="CodeArtifactInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput"></a>

```go
func CodeArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `CpuConfigurationsInput`<sup>Optional</sup> <a name="CpuConfigurationsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput"></a>

```go
func CpuConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EgressNetworkConnectorsInput`<sup>Optional</sup> <a name="EgressNetworkConnectorsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput"></a>

```go
func EgressNetworkConnectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `HooksInput`<sup>Optional</sup> <a name="HooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput"></a>

```go
func HooksInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput"></a>

```go
func LoggingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities"></a>

```go
func AdditionalOsCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn"></a>

```go
func BaseImageArn() *string
```

- *Type:* *string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion"></a>

```go
func BaseImageVersion() *string
```

- *Type:* *string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn"></a>

```go
func BuildRoleArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors"></a>

```go
func EgressNetworkConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaMicrovmImageCodeArtifact <a name="LambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageCodeArtifact {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

### LambdaMicrovmImageConfig <a name="LambdaMicrovmImageConfig" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalOsCapabilities: *[]*string,
	BaseImageArn: *string,
	BaseImageVersion: *string,
	BuildRoleArn: *string,
	CodeArtifact: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact,
	CpuConfigurations: interface{},
	Description: *string,
	EgressNetworkConnectors: *[]*string,
	EnvironmentVariables: interface{},
	Hooks: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks,
	Logging: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging,
	Name: *string,
	Resources: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn">BaseImageArn</a></code> | <code>*string</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion">BaseImageVersion</a></code> | <code>*string</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn">BuildRoleArn</a></code> | <code>*string</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations">CpuConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>interface{}</code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources">Resources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities"></a>

```go
AdditionalOsCapabilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn"></a>

```go
BaseImageArn *string
```

- *Type:* *string

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion"></a>

```go
BaseImageVersion *string
```

- *Type:* *string

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn"></a>

```go
BuildRoleArn *string
```

- *Type:* *string

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact"></a>

```go
CodeArtifact LambdaMicrovmImageCodeArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `CpuConfigurations`<sup>Required</sup> <a name="CpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations"></a>

```go
CpuConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors"></a>

```go
EgressNetworkConnectors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables"></a>

```go
EnvironmentVariables interface{}
```

- *Type:* interface{}

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks"></a>

```go
Hooks LambdaMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging"></a>

```go
Logging LambdaMicrovmImageLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

### LambdaMicrovmImageCpuConfigurations <a name="LambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageCpuConfigurations {
	Architecture: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture">Architecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}. |

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}.

---

### LambdaMicrovmImageEnvironmentVariables <a name="LambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageEnvironmentVariables {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}.

---

### LambdaMicrovmImageHooks <a name="LambdaMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageHooks {
	MicrovmHooks: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks,
	MicrovmImageHooks: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}. |

---

##### `MicrovmHooks`<sup>Optional</sup> <a name="MicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks"></a>

```go
MicrovmHooks LambdaMicrovmImageHooksMicrovmHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

##### `MicrovmImageHooks`<sup>Optional</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks"></a>

```go
MicrovmImageHooks LambdaMicrovmImageHooksMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

### LambdaMicrovmImageHooksMicrovmHooks <a name="LambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageHooksMicrovmHooks {
	Resume: *string,
	ResumeTimeoutInSeconds: *f64,
	Run: *string,
	RunTimeoutInSeconds: *f64,
	Suspend: *string,
	SuspendTimeoutInSeconds: *f64,
	Terminate: *string,
	TerminateTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume">Resume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run">Run</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend">Suspend</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate">Terminate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}. |

---

##### `Resume`<sup>Optional</sup> <a name="Resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume"></a>

```go
Resume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

##### `ResumeTimeoutInSeconds`<sup>Optional</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds"></a>

```go
ResumeTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run"></a>

```go
Run *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

##### `RunTimeoutInSeconds`<sup>Optional</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds"></a>

```go
RunTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend"></a>

```go
Suspend *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

##### `SuspendTimeoutInSeconds`<sup>Optional</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds"></a>

```go
SuspendTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

##### `Terminate`<sup>Optional</sup> <a name="Terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate"></a>

```go
Terminate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

##### `TerminateTimeoutInSeconds`<sup>Optional</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds"></a>

```go
TerminateTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

### LambdaMicrovmImageHooksMicrovmImageHooks <a name="LambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageHooksMicrovmImageHooks {
	Ready: *string,
	ReadyTimeoutInSeconds: *f64,
	Validate: *string,
	ValidateTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready">Ready</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate">Validate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}. |

---

##### `Ready`<sup>Optional</sup> <a name="Ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready"></a>

```go
Ready *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

##### `ReadyTimeoutInSeconds`<sup>Optional</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds"></a>

```go
ReadyTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

##### `ValidateTimeoutInSeconds`<sup>Optional</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds"></a>

```go
ValidateTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

### LambdaMicrovmImageLogging <a name="LambdaMicrovmImageLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageLogging {
	Cloudwatch: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}. |

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch"></a>

```go
Cloudwatch LambdaMicrovmImageLoggingCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

### LambdaMicrovmImageLoggingCloudwatch <a name="LambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageLoggingCloudwatch {
	LogGroup: *string,
	LogStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream">LogStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

##### `LogStream`<sup>Optional</sup> <a name="LogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream"></a>

```go
LogStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

### LambdaMicrovmImageResources <a name="LambdaMicrovmImageResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageResources {
	MinimumMemoryInMiB: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB">MinimumMemoryInMiB</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}. |

---

##### `MinimumMemoryInMiB`<sup>Required</sup> <a name="MinimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB"></a>

```go
MinimumMemoryInMiB *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}.

---

### LambdaMicrovmImageTags <a name="LambdaMicrovmImageTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

&lambdamicrovmimage.LambdaMicrovmImageTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaMicrovmImageCodeArtifactOutputReference <a name="LambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageCodeArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageCodeArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageCpuConfigurationsList <a name="LambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageCpuConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaMicrovmImageCpuConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get"></a>

```go
func Get(index *f64) LambdaMicrovmImageCpuConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageCpuConfigurationsOutputReference <a name="LambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageCpuConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaMicrovmImageCpuConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageEnvironmentVariablesList <a name="LambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaMicrovmImageEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) LambdaMicrovmImageEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageEnvironmentVariablesOutputReference <a name="LambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaMicrovmImageEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageHooksMicrovmHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageHooksMicrovmHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume">ResetResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds">ResetResumeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds">ResetRunTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds">ResetSuspendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate">ResetTerminate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds">ResetTerminateTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResume` <a name="ResetResume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume"></a>

```go
func ResetResume()
```

##### `ResetResumeTimeoutInSeconds` <a name="ResetResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds"></a>

```go
func ResetResumeTimeoutInSeconds()
```

##### `ResetRun` <a name="ResetRun" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun"></a>

```go
func ResetRun()
```

##### `ResetRunTimeoutInSeconds` <a name="ResetRunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds"></a>

```go
func ResetRunTimeoutInSeconds()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend"></a>

```go
func ResetSuspend()
```

##### `ResetSuspendTimeoutInSeconds` <a name="ResetSuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds"></a>

```go
func ResetSuspendTimeoutInSeconds()
```

##### `ResetTerminate` <a name="ResetTerminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate"></a>

```go
func ResetTerminate()
```

##### `ResetTerminateTimeoutInSeconds` <a name="ResetTerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds"></a>

```go
func ResetTerminateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput">ResumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput">ResumeTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput">RunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput">RunTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput">SuspendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput">SuspendTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput">TerminateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput">TerminateTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">Resume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">Run</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">Suspend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">Terminate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResumeInput`<sup>Optional</sup> <a name="ResumeInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput"></a>

```go
func ResumeInput() *string
```

- *Type:* *string

---

##### `ResumeTimeoutInSecondsInput`<sup>Optional</sup> <a name="ResumeTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput"></a>

```go
func ResumeTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput"></a>

```go
func RunInput() *string
```

- *Type:* *string

---

##### `RunTimeoutInSecondsInput`<sup>Optional</sup> <a name="RunTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput"></a>

```go
func RunTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput"></a>

```go
func SuspendInput() *string
```

- *Type:* *string

---

##### `SuspendTimeoutInSecondsInput`<sup>Optional</sup> <a name="SuspendTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput"></a>

```go
func SuspendTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TerminateInput`<sup>Optional</sup> <a name="TerminateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput"></a>

```go
func TerminateInput() *string
```

- *Type:* *string

---

##### `TerminateTimeoutInSecondsInput`<sup>Optional</sup> <a name="TerminateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput"></a>

```go
func TerminateTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Resume`<sup>Required</sup> <a name="Resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```go
func Resume() *string
```

- *Type:* *string

---

##### `ResumeTimeoutInSeconds`<sup>Required</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```go
func ResumeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```go
func Run() *string
```

- *Type:* *string

---

##### `RunTimeoutInSeconds`<sup>Required</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```go
func RunTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```go
func Suspend() *string
```

- *Type:* *string

---

##### `SuspendTimeoutInSeconds`<sup>Required</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```go
func SuspendTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Terminate`<sup>Required</sup> <a name="Terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```go
func Terminate() *string
```

- *Type:* *string

---

##### `TerminateTimeoutInSeconds`<sup>Required</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```go
func TerminateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageHooksMicrovmImageHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageHooksMicrovmImageHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady">ResetReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds">ResetReadyTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds">ResetValidateTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReady` <a name="ResetReady" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady"></a>

```go
func ResetReady()
```

##### `ResetReadyTimeoutInSeconds` <a name="ResetReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds"></a>

```go
func ResetReadyTimeoutInSeconds()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate"></a>

```go
func ResetValidate()
```

##### `ResetValidateTimeoutInSeconds` <a name="ResetValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds"></a>

```go
func ResetValidateTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput">ReadyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput">ReadyTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput">ValidateTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">Ready</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadyInput`<sup>Optional</sup> <a name="ReadyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput"></a>

```go
func ReadyInput() *string
```

- *Type:* *string

---

##### `ReadyTimeoutInSecondsInput`<sup>Optional</sup> <a name="ReadyTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput"></a>

```go
func ReadyTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `ValidateTimeoutInSecondsInput`<sup>Optional</sup> <a name="ValidateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput"></a>

```go
func ValidateTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```go
func Ready() *string
```

- *Type:* *string

---

##### `ReadyTimeoutInSeconds`<sup>Required</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```go
func ReadyTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `ValidateTimeoutInSeconds`<sup>Required</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```go
func ValidateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks">PutMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks">PutMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks">ResetMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks">ResetMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrovmHooks` <a name="PutMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks"></a>

```go
func PutMicrovmHooks(value LambdaMicrovmImageHooksMicrovmHooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `PutMicrovmImageHooks` <a name="PutMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks"></a>

```go
func PutMicrovmImageHooks(value LambdaMicrovmImageHooksMicrovmImageHooks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `ResetMicrovmHooks` <a name="ResetMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks"></a>

```go
func ResetMicrovmHooks()
```

##### `ResetMicrovmImageHooks` <a name="ResetMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks"></a>

```go
func ResetMicrovmImageHooks()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput">MicrovmHooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput">MicrovmImageHooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrovmHooks`<sup>Required</sup> <a name="MicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```go
func MicrovmHooks() LambdaMicrovmImageHooksMicrovmHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `MicrovmImageHooks`<sup>Required</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```go
func MicrovmImageHooks() LambdaMicrovmImageHooksMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `MicrovmHooksInput`<sup>Optional</sup> <a name="MicrovmHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput"></a>

```go
func MicrovmHooksInput() interface{}
```

- *Type:* interface{}

---

##### `MicrovmImageHooksInput`<sup>Optional</sup> <a name="MicrovmImageHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput"></a>

```go
func MicrovmImageHooksInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageLoggingCloudwatchOutputReference <a name="LambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageLoggingCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageLoggingCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream">ResetLogStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```

##### `ResetLogStream` <a name="ResetLogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream"></a>

```go
func ResetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput">LogStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogStreamInput`<sup>Optional</sup> <a name="LogStreamInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```go
func LogStreamInput() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```go
func LogStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageLoggingOutputReference <a name="LambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaMicrovmImageLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch"></a>

```go
func PutCloudwatch(value LambdaMicrovmImageLoggingCloudwatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch"></a>

```go
func ResetCloudwatch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput">CloudwatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() LambdaMicrovmImageLoggingCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput"></a>

```go
func CloudwatchInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageResourcesList <a name="LambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaMicrovmImageResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get"></a>

```go
func Get(index *f64) LambdaMicrovmImageResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageResourcesOutputReference <a name="LambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaMicrovmImageResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput">MinimumMemoryInMiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">MinimumMemoryInMiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumMemoryInMiBInput`<sup>Optional</sup> <a name="MinimumMemoryInMiBInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput"></a>

```go
func MinimumMemoryInMiBInput() *f64
```

- *Type:* *f64

---

##### `MinimumMemoryInMiB`<sup>Required</sup> <a name="MinimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```go
func MinimumMemoryInMiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageTagsList <a name="LambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaMicrovmImageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get"></a>

```go
func Get(index *f64) LambdaMicrovmImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaMicrovmImageTagsOutputReference <a name="LambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdamicrovmimage"

lambdamicrovmimage.NewLambdaMicrovmImageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaMicrovmImageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



