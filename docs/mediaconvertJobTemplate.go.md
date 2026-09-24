# `mediaconvertJobTemplate` Submodule <a name="`mediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.mediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertJobTemplate <a name="MediaconvertJobTemplate" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.NewMediaconvertJobTemplate(scope Construct, id *string, config MediaconvertJobTemplateConfig) MediaconvertJobTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings">PutAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations">PutHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings">ResetAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations">ResetHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue">ResetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval">ResetStatusUpdateInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccelerationSettings` <a name="PutAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings"></a>

```go
func PutAccelerationSettings(value MediaconvertJobTemplateAccelerationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `PutHopDestinations` <a name="PutHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations"></a>

```go
func PutHopDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccelerationSettings` <a name="ResetAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings"></a>

```go
func ResetAccelerationSettings()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHopDestinations` <a name="ResetHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations"></a>

```go
func ResetHopDestinations()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetQueue` <a name="ResetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue"></a>

```go
func ResetQueue()
```

##### `ResetStatusUpdateInterval` <a name="ResetStatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval"></a>

```go
func ResetStatusUpdateInterval()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.MediaconvertJobTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.MediaconvertJobTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.MediaconvertJobTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.MediaconvertJobTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconvertJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings">AccelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations">HopDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput">AccelerationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput">HopDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput">QueueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput">SettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput">StatusUpdateIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue">Queue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson">SettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval">StatusUpdateInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccelerationSettings`<sup>Required</sup> <a name="AccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings"></a>

```go
func AccelerationSettings() MediaconvertJobTemplateAccelerationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HopDestinations`<sup>Required</sup> <a name="HopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations"></a>

```go
func HopDestinations() MediaconvertJobTemplateHopDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccelerationSettingsInput`<sup>Optional</sup> <a name="AccelerationSettingsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput"></a>

```go
func AccelerationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HopDestinationsInput`<sup>Optional</sup> <a name="HopDestinationsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput"></a>

```go
func HopDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput"></a>

```go
func QueueInput() *string
```

- *Type:* *string

---

##### `SettingsJsonInput`<sup>Optional</sup> <a name="SettingsJsonInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput"></a>

```go
func SettingsJsonInput() *string
```

- *Type:* *string

---

##### `StatusUpdateIntervalInput`<sup>Optional</sup> <a name="StatusUpdateIntervalInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput"></a>

```go
func StatusUpdateIntervalInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue"></a>

```go
func Queue() *string
```

- *Type:* *string

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson"></a>

```go
func SettingsJson() *string
```

- *Type:* *string

---

##### `StatusUpdateInterval`<sup>Required</sup> <a name="StatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval"></a>

```go
func StatusUpdateInterval() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertJobTemplateAccelerationSettings <a name="MediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

&mediaconvertjobtemplate.MediaconvertJobTemplateAccelerationSettings {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode">Mode</a></code> | <code>*string</code> | Specify the conditions when the service will run your job with accelerated transcoding. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

### MediaconvertJobTemplateConfig <a name="MediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

&mediaconvertjobtemplate.MediaconvertJobTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SettingsJson: *string,
	AccelerationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings,
	Category: *string,
	Description: *string,
	HopDestinations: interface{},
	Name: *string,
	Priority: *f64,
	Queue: *string,
	StatusUpdateInterval: *string,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson">SettingsJson</a></code> | <code>*string</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings">AccelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category">Category</a></code> | <code>*string</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations">HopDestinations</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority">Priority</a></code> | <code>*f64</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue">Queue</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval">StatusUpdateInterval</a></code> | <code>*string</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags">Tags</a></code> | <code>*string</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson"></a>

```go
SettingsJson *string
```

- *Type:* *string

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `AccelerationSettings`<sup>Optional</sup> <a name="AccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings"></a>

```go
AccelerationSettings MediaconvertJobTemplateAccelerationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `HopDestinations`<sup>Optional</sup> <a name="HopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations"></a>

```go
HopDestinations interface{}
```

- *Type:* interface{}

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `Queue`<sup>Optional</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue"></a>

```go
Queue *string
```

- *Type:* *string

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `StatusUpdateInterval`<sup>Optional</sup> <a name="StatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval"></a>

```go
StatusUpdateInterval *string
```

- *Type:* *string

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

### MediaconvertJobTemplateHopDestinations <a name="MediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

&mediaconvertjobtemplate.MediaconvertJobTemplateHopDestinations {
	Priority: *f64,
	Queue: *string,
	WaitMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority">Priority</a></code> | <code>*f64</code> | Optional. A different relative priority for the job in the destination queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue">Queue</a></code> | <code>*string</code> | Optional. The destination queue for queue hopping. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes">WaitMinutes</a></code> | <code>*f64</code> | Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. |

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Optional. A different relative priority for the job in the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `Queue`<sup>Optional</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue"></a>

```go
Queue *string
```

- *Type:* *string

Optional. The destination queue for queue hopping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `WaitMinutes`<sup>Optional</sup> <a name="WaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes"></a>

```go
WaitMinutes *f64
```

- *Type:* *f64

Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconvertJobTemplateAccelerationSettingsOutputReference <a name="MediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.NewMediaconvertJobTemplateAccelerationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconvertJobTemplateAccelerationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconvertJobTemplateHopDestinationsList <a name="MediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.NewMediaconvertJobTemplateHopDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconvertJobTemplateHopDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get"></a>

```go
func Get(index *f64) MediaconvertJobTemplateHopDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconvertJobTemplateHopDestinationsOutputReference <a name="MediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertjobtemplate"

mediaconvertjobtemplate.NewMediaconvertJobTemplateHopDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconvertJobTemplateHopDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue">ResetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes">ResetWaitMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetQueue` <a name="ResetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue"></a>

```go
func ResetQueue()
```

##### `ResetWaitMinutes` <a name="ResetWaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes"></a>

```go
func ResetWaitMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput">QueueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput">WaitMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue">Queue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">WaitMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput"></a>

```go
func QueueInput() *string
```

- *Type:* *string

---

##### `WaitMinutesInput`<sup>Optional</sup> <a name="WaitMinutesInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput"></a>

```go
func WaitMinutesInput() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```go
func Queue() *string
```

- *Type:* *string

---

##### `WaitMinutes`<sup>Required</sup> <a name="WaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```go
func WaitMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



