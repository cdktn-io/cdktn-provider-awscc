# `mediatailorProgram` Submodule <a name="`mediatailorProgram` Submodule" id="@cdktn/provider-awscc.mediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorProgram <a name="MediatailorProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgram(scope Construct, id *string, config MediatailorProgramConfig) MediatailorProgram
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig">MediatailorProgramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig">MediatailorProgramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia">PutAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration">PutScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia">ResetAudienceMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName">ResetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration">ResetScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName">ResetVodSourceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks"></a>

```go
func PutAdBreaks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAudienceMedia` <a name="PutAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia"></a>

```go
func PutAudienceMedia(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduleConfiguration` <a name="PutScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration"></a>

```go
func PutScheduleConfiguration(value MediatailorProgramScheduleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks"></a>

```go
func ResetAdBreaks()
```

##### `ResetAudienceMedia` <a name="ResetAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia"></a>

```go
func ResetAudienceMedia()
```

##### `ResetLiveSourceName` <a name="ResetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName"></a>

```go
func ResetLiveSourceName()
```

##### `ResetScheduleConfiguration` <a name="ResetScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration"></a>

```go
func ResetScheduleConfiguration()
```

##### `ResetVodSourceName` <a name="ResetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName"></a>

```go
func ResetVodSourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.MediatailorProgram_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.MediatailorProgram_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.MediatailorProgram_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.MediatailorProgram_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediatailorProgram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia">AudienceMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis">DurationMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput">AdBreaksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput">AudienceMediaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput">LiveSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput">ProgramNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput">ScheduleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName">LiveSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName">ProgramName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks"></a>

```go
func AdBreaks() MediatailorProgramAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AudienceMedia`<sup>Required</sup> <a name="AudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia"></a>

```go
func AudienceMedia() MediatailorProgramAudienceMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a>

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange"></a>

```go
func ClipRange() MediatailorProgramClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis"></a>

```go
func DurationMillis() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration"></a>

```go
func ScheduleConfiguration() MediatailorProgramScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime"></a>

```go
func ScheduledStartTime() *string
```

- *Type:* *string

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput"></a>

```go
func AdBreaksInput() interface{}
```

- *Type:* interface{}

---

##### `AudienceMediaInput`<sup>Optional</sup> <a name="AudienceMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput"></a>

```go
func AudienceMediaInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `LiveSourceNameInput`<sup>Optional</sup> <a name="LiveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput"></a>

```go
func LiveSourceNameInput() *string
```

- *Type:* *string

---

##### `ProgramNameInput`<sup>Optional</sup> <a name="ProgramNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput"></a>

```go
func ProgramNameInput() *string
```

- *Type:* *string

---

##### `ScheduleConfigurationInput`<sup>Optional</sup> <a name="ScheduleConfigurationInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput"></a>

```go
func ScheduleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput"></a>

```go
func VodSourceNameInput() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `LiveSourceName`<sup>Required</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName"></a>

```go
func LiveSourceName() *string
```

- *Type:* *string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName"></a>

```go
func ProgramName() *string
```

- *Type:* *string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName"></a>

```go
func VodSourceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorProgramAdBreaks <a name="MediatailorProgramAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaks {
	AdBreakMetadata: interface{},
	MessageType: *string,
	OffsetMillis: *f64,
	Slate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate,
	SpliceInsertMessage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage,
	TimeSignalMessage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata">AdBreakMetadata</a></code> | <code>interface{}</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType">MessageType</a></code> | <code>*string</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis">OffsetMillis</a></code> | <code>*f64</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `AdBreakMetadata`<sup>Optional</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata"></a>

```go
AdBreakMetadata interface{}
```

- *Type:* interface{}

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType"></a>

```go
MessageType *string
```

- *Type:* *string

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `OffsetMillis`<sup>Optional</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis"></a>

```go
OffsetMillis *f64
```

- *Type:* *f64

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `Slate`<sup>Optional</sup> <a name="Slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate"></a>

```go
Slate MediatailorProgramAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `SpliceInsertMessage`<sup>Optional</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage"></a>

```go
SpliceInsertMessage MediatailorProgramAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `TimeSignalMessage`<sup>Optional</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage"></a>

```go
TimeSignalMessage MediatailorProgramAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAdBreaksAdBreakMetadata <a name="MediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaksAdBreakMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key">Key</a></code> | <code>*string</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value">Value</a></code> | <code>*string</code> | The value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAdBreaksSlate <a name="MediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaksSlate {
	SourceLocationName: *string,
	VodSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | The slate VOD source name. |

---

##### `SourceLocationName`<sup>Optional</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `VodSourceName`<sup>Optional</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName"></a>

```go
VodSourceName *string
```

- *Type:* *string

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAdBreaksSpliceInsertMessage <a name="MediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaksSpliceInsertMessage {
	AvailNum: *f64,
	AvailsExpected: *f64,
	SpliceEventId: *f64,
	UniqueProgramId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum">AvailNum</a></code> | <code>*f64</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected">AvailsExpected</a></code> | <code>*f64</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId">SpliceEventId</a></code> | <code>*f64</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId">UniqueProgramId</a></code> | <code>*f64</code> | This is written to splice_insert.unique_program_id. |

---

##### `AvailNum`<sup>Optional</sup> <a name="AvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum"></a>

```go
AvailNum *f64
```

- *Type:* *f64

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `AvailsExpected`<sup>Optional</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```go
AvailsExpected *f64
```

- *Type:* *f64

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `SpliceEventId`<sup>Optional</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```go
SpliceEventId *f64
```

- *Type:* *f64

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `UniqueProgramId`<sup>Optional</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```go
UniqueProgramId *f64
```

- *Type:* *f64

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAdBreaksTimeSignalMessage <a name="MediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaksTimeSignalMessage {
	SegmentationDescriptors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code>interface{}</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `SegmentationDescriptors`<sup>Optional</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```go
SegmentationDescriptors interface{}
```

- *Type:* interface{}

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors {
	SegmentationEventId: *f64,
	SegmentationTypeId: *f64,
	SegmentationUpid: *string,
	SegmentationUpidType: *f64,
	SegmentNum: *f64,
	SegmentsExpected: *f64,
	SubSegmentNum: *f64,
	SubSegmentsExpected: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">SegmentationEventId</a></code> | <code>*f64</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>*f64</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">SegmentationUpid</a></code> | <code>*string</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>*f64</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">SegmentNum</a></code> | <code>*f64</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">SegmentsExpected</a></code> | <code>*f64</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">SubSegmentNum</a></code> | <code>*f64</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>*f64</code> | The number of sub-segments expected. |

---

##### `SegmentationEventId`<sup>Optional</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```go
SegmentationEventId *f64
```

- *Type:* *f64

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `SegmentationTypeId`<sup>Optional</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```go
SegmentationTypeId *f64
```

- *Type:* *f64

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `SegmentationUpid`<sup>Optional</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```go
SegmentationUpid *string
```

- *Type:* *string

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `SegmentationUpidType`<sup>Optional</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```go
SegmentationUpidType *f64
```

- *Type:* *f64

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `SegmentNum`<sup>Optional</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```go
SegmentNum *f64
```

- *Type:* *f64

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `SegmentsExpected`<sup>Optional</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```go
SegmentsExpected *f64
```

- *Type:* *f64

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `SubSegmentNum`<sup>Optional</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```go
SubSegmentNum *f64
```

- *Type:* *f64

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `SubSegmentsExpected`<sup>Optional</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```go
SubSegmentsExpected *f64
```

- *Type:* *f64

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMedia <a name="MediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMedia {
	AlternateMedia: interface{},
	Audience: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia">AlternateMedia</a></code> | <code>interface{}</code> | The list of AlternateMedia defined in AudienceMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience">Audience</a></code> | <code>*string</code> | The Audience defined in AudienceMedia. |

---

##### `AlternateMedia`<sup>Optional</sup> <a name="AlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia"></a>

```go
AlternateMedia interface{}
```

- *Type:* interface{}

The list of AlternateMedia defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#alternate_media MediatailorProgram#alternate_media}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

The Audience defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience MediatailorProgram#audience}

---

### MediatailorProgramAudienceMediaAlternateMedia <a name="MediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMedia {
	AdBreaks: interface{},
	ClipRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange,
	DurationMillis: *f64,
	LiveSourceName: *string,
	ScheduledStartTimeMillis: *f64,
	SourceLocationName: *string,
	VodSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks">AdBreaks</a></code> | <code>interface{}</code> | Ad break configuration parameters defined in AlternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis">DurationMillis</a></code> | <code>*f64</code> | The duration of the alternateMedia in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName">LiveSourceName</a></code> | <code>*string</code> | The name of the live source for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>*f64</code> | The date and time that the alternateMedia is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | The name of the source location for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | The name of the VOD source for alternateMedia. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks"></a>

```go
AdBreaks interface{}
```

- *Type:* interface{}

Ad break configuration parameters defined in AlternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `ClipRange`<sup>Optional</sup> <a name="ClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange"></a>

```go
ClipRange MediatailorProgramAudienceMediaAlternateMediaClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `DurationMillis`<sup>Optional</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis"></a>

```go
DurationMillis *f64
```

- *Type:* *f64

The duration of the alternateMedia in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `LiveSourceName`<sup>Optional</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName"></a>

```go
LiveSourceName *string
```

- *Type:* *string

The name of the live source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `ScheduledStartTimeMillis`<sup>Optional</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis"></a>

```go
ScheduledStartTimeMillis *f64
```

- *Type:* *f64

The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `SourceLocationName`<sup>Optional</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

The name of the source location for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `VodSourceName`<sup>Optional</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName"></a>

```go
VodSourceName *string
```

- *Type:* *string

The name of the VOD source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks {
	AdBreakMetadata: interface{},
	MessageType: *string,
	OffsetMillis: *f64,
	Slate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate,
	SpliceInsertMessage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage,
	TimeSignalMessage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata">AdBreakMetadata</a></code> | <code>interface{}</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType">MessageType</a></code> | <code>*string</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis">OffsetMillis</a></code> | <code>*f64</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `AdBreakMetadata`<sup>Optional</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata"></a>

```go
AdBreakMetadata interface{}
```

- *Type:* interface{}

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType"></a>

```go
MessageType *string
```

- *Type:* *string

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `OffsetMillis`<sup>Optional</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis"></a>

```go
OffsetMillis *f64
```

- *Type:* *f64

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `Slate`<sup>Optional</sup> <a name="Slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate"></a>

```go
Slate MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `SpliceInsertMessage`<sup>Optional</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage"></a>

```go
SpliceInsertMessage MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `TimeSignalMessage`<sup>Optional</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage"></a>

```go
TimeSignalMessage MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key">Key</a></code> | <code>*string</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value">Value</a></code> | <code>*string</code> | The value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate {
	SourceLocationName: *string,
	VodSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | The slate VOD source name. |

---

##### `SourceLocationName`<sup>Optional</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `VodSourceName`<sup>Optional</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName"></a>

```go
VodSourceName *string
```

- *Type:* *string

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage {
	AvailNum: *f64,
	AvailsExpected: *f64,
	SpliceEventId: *f64,
	UniqueProgramId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum">AvailNum</a></code> | <code>*f64</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected">AvailsExpected</a></code> | <code>*f64</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId">SpliceEventId</a></code> | <code>*f64</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId">UniqueProgramId</a></code> | <code>*f64</code> | This is written to splice_insert.unique_program_id. |

---

##### `AvailNum`<sup>Optional</sup> <a name="AvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum"></a>

```go
AvailNum *f64
```

- *Type:* *f64

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `AvailsExpected`<sup>Optional</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```go
AvailsExpected *f64
```

- *Type:* *f64

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `SpliceEventId`<sup>Optional</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```go
SpliceEventId *f64
```

- *Type:* *f64

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `UniqueProgramId`<sup>Optional</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```go
UniqueProgramId *f64
```

- *Type:* *f64

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage {
	SegmentationDescriptors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code>interface{}</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `SegmentationDescriptors`<sup>Optional</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```go
SegmentationDescriptors interface{}
```

- *Type:* interface{}

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors {
	SegmentationEventId: *f64,
	SegmentationTypeId: *f64,
	SegmentationUpid: *string,
	SegmentationUpidType: *f64,
	SegmentNum: *f64,
	SegmentsExpected: *f64,
	SubSegmentNum: *f64,
	SubSegmentsExpected: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">SegmentationEventId</a></code> | <code>*f64</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>*f64</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">SegmentationUpid</a></code> | <code>*string</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>*f64</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">SegmentNum</a></code> | <code>*f64</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">SegmentsExpected</a></code> | <code>*f64</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">SubSegmentNum</a></code> | <code>*f64</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>*f64</code> | The number of sub-segments expected. |

---

##### `SegmentationEventId`<sup>Optional</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```go
SegmentationEventId *f64
```

- *Type:* *f64

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `SegmentationTypeId`<sup>Optional</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```go
SegmentationTypeId *f64
```

- *Type:* *f64

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `SegmentationUpid`<sup>Optional</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```go
SegmentationUpid *string
```

- *Type:* *string

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `SegmentationUpidType`<sup>Optional</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```go
SegmentationUpidType *f64
```

- *Type:* *f64

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `SegmentNum`<sup>Optional</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```go
SegmentNum *f64
```

- *Type:* *f64

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `SegmentsExpected`<sup>Optional</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```go
SegmentsExpected *f64
```

- *Type:* *f64

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `SubSegmentNum`<sup>Optional</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```go
SubSegmentNum *f64
```

- *Type:* *f64

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `SubSegmentsExpected`<sup>Optional</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```go
SubSegmentsExpected *f64
```

- *Type:* *f64

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMediaAlternateMediaClipRange <a name="MediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramAudienceMediaAlternateMediaClipRange {
	EndOffsetMillis: *f64,
	StartOffsetMillis: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>*f64</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>*f64</code> | The start offset of the clip range, in milliseconds. |

---

##### `EndOffsetMillis`<sup>Optional</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis"></a>

```go
EndOffsetMillis *f64
```

- *Type:* *f64

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `StartOffsetMillis`<sup>Optional</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis"></a>

```go
StartOffsetMillis *f64
```

- *Type:* *f64

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramClipRange <a name="MediatailorProgramClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramClipRange {

}
```


### MediatailorProgramConfig <a name="MediatailorProgramConfig" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelName: *string,
	ProgramName: *string,
	SourceLocationName: *string,
	AdBreaks: interface{},
	AudienceMedia: interface{},
	LiveSourceName: *string,
	ScheduleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration,
	VodSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName">ProgramName</a></code> | <code>*string</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks">AdBreaks</a></code> | <code>interface{}</code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia">AudienceMedia</a></code> | <code>interface{}</code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName">LiveSourceName</a></code> | <code>*string</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | The name that's used to refer to a VOD source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName"></a>

```go
ProgramName *string
```

- *Type:* *string

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks"></a>

```go
AdBreaks interface{}
```

- *Type:* interface{}

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `AudienceMedia`<sup>Optional</sup> <a name="AudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia"></a>

```go
AudienceMedia interface{}
```

- *Type:* interface{}

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `LiveSourceName`<sup>Optional</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName"></a>

```go
LiveSourceName *string
```

- *Type:* *string

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `ScheduleConfiguration`<sup>Optional</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration"></a>

```go
ScheduleConfiguration MediatailorProgramScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `VodSourceName`<sup>Optional</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName"></a>

```go
VodSourceName *string
```

- *Type:* *string

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramScheduleConfiguration <a name="MediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramScheduleConfiguration {
	ClipRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange,
	Transition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition">Transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | Program transition configuration. |

---

##### `ClipRange`<sup>Optional</sup> <a name="ClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange"></a>

```go
ClipRange MediatailorProgramScheduleConfigurationClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `Transition`<sup>Optional</sup> <a name="Transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition"></a>

```go
Transition MediatailorProgramScheduleConfigurationTransition
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

Program transition configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}

---

### MediatailorProgramScheduleConfigurationClipRange <a name="MediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramScheduleConfigurationClipRange {
	EndOffsetMillis: *f64,
	StartOffsetMillis: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>*f64</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>*f64</code> | The start offset of the clip range, in milliseconds. |

---

##### `EndOffsetMillis`<sup>Optional</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis"></a>

```go
EndOffsetMillis *f64
```

- *Type:* *f64

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `StartOffsetMillis`<sup>Optional</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis"></a>

```go
StartOffsetMillis *f64
```

- *Type:* *f64

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramScheduleConfigurationTransition <a name="MediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

&mediatailorprogram.MediatailorProgramScheduleConfigurationTransition {
	DurationMillis: *f64,
	RelativePosition: *string,
	RelativeProgram: *string,
	ScheduledStartTimeMillis: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis">DurationMillis</a></code> | <code>*f64</code> | The duration of the live program in seconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition">RelativePosition</a></code> | <code>*string</code> | The position where this program will be inserted relative to the RelativePosition. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram">RelativeProgram</a></code> | <code>*string</code> | The name of the program that this program will be inserted next to. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>*f64</code> | The date and time that the program is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type">Type</a></code> | <code>*string</code> | Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE. |

---

##### `DurationMillis`<sup>Optional</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis"></a>

```go
DurationMillis *f64
```

- *Type:* *f64

The duration of the live program in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `RelativePosition`<sup>Optional</sup> <a name="RelativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition"></a>

```go
RelativePosition *string
```

- *Type:* *string

The position where this program will be inserted relative to the RelativePosition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}

---

##### `RelativeProgram`<sup>Optional</sup> <a name="RelativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram"></a>

```go
RelativeProgram *string
```

- *Type:* *string

The name of the program that this program will be inserted next to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}

---

##### `ScheduledStartTimeMillis`<sup>Optional</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis"></a>

```go
ScheduledStartTimeMillis *f64
```

- *Type:* *f64

The date and time that the program is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#type MediatailorProgram#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorProgramAdBreaksAdBreakMetadataList <a name="MediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksAdBreakMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAdBreaksAdBreakMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```go
func Get(index *f64) MediatailorProgramAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksAdBreakMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAdBreaksAdBreakMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksList <a name="MediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAdBreaksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get"></a>

```go
func Get(index *f64) MediatailorProgramAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksOutputReference <a name="MediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAdBreaksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata">PutAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate">PutSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage">PutSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage">PutTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata">ResetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis">ResetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate">ResetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage">ResetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage">ResetTimeSignalMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreakMetadata` <a name="PutAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata"></a>

```go
func PutAdBreakMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSlate` <a name="PutSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate"></a>

```go
func PutSlate(value MediatailorProgramAdBreaksSlate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `PutSpliceInsertMessage` <a name="PutSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage"></a>

```go
func PutSpliceInsertMessage(value MediatailorProgramAdBreaksSpliceInsertMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `PutTimeSignalMessage` <a name="PutTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage"></a>

```go
func PutTimeSignalMessage(value MediatailorProgramAdBreaksTimeSignalMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `ResetAdBreakMetadata` <a name="ResetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata"></a>

```go
func ResetAdBreakMetadata()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType"></a>

```go
func ResetMessageType()
```

##### `ResetOffsetMillis` <a name="ResetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis"></a>

```go
func ResetOffsetMillis()
```

##### `ResetSlate` <a name="ResetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate"></a>

```go
func ResetSlate()
```

##### `ResetSpliceInsertMessage` <a name="ResetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```go
func ResetSpliceInsertMessage()
```

##### `ResetTimeSignalMessage` <a name="ResetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage"></a>

```go
func ResetTimeSignalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">AdBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput">AdBreakMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput">OffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput">SlateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput">SpliceInsertMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput">TimeSignalMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis">OffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreakMetadata`<sup>Required</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```go
func AdBreakMetadata() MediatailorProgramAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `Slate`<sup>Required</sup> <a name="Slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate"></a>

```go
func Slate() MediatailorProgramAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `SpliceInsertMessage`<sup>Required</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```go
func SpliceInsertMessage() MediatailorProgramAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `TimeSignalMessage`<sup>Required</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```go
func TimeSignalMessage() MediatailorProgramAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `AdBreakMetadataInput`<sup>Optional</sup> <a name="AdBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```go
func AdBreakMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput"></a>

```go
func MessageTypeInput() *string
```

- *Type:* *string

---

##### `OffsetMillisInput`<sup>Optional</sup> <a name="OffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput"></a>

```go
func OffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `SlateInput`<sup>Optional</sup> <a name="SlateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput"></a>

```go
func SlateInput() interface{}
```

- *Type:* interface{}

---

##### `SpliceInsertMessageInput`<sup>Optional</sup> <a name="SpliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```go
func SpliceInsertMessageInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSignalMessageInput`<sup>Optional</sup> <a name="TimeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```go
func TimeSignalMessageInput() interface{}
```

- *Type:* interface{}

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `OffsetMillis`<sup>Required</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```go
func OffsetMillis() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksSlateOutputReference <a name="MediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksSlateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAdBreaksSlateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName">ResetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName">ResetVodSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceLocationName` <a name="ResetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```go
func ResetSourceLocationName()
```

##### `ResetVodSourceName` <a name="ResetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName"></a>

```go
func ResetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```go
func VodSourceNameInput() *string
```

- *Type:* *string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```go
func VodSourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksSpliceInsertMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAdBreaksSpliceInsertMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">ResetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">ResetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">ResetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">ResetUniqueProgramId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailNum` <a name="ResetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```go
func ResetAvailNum()
```

##### `ResetAvailsExpected` <a name="ResetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```go
func ResetAvailsExpected()
```

##### `ResetSpliceEventId` <a name="ResetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```go
func ResetSpliceEventId()
```

##### `ResetUniqueProgramId` <a name="ResetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```go
func ResetUniqueProgramId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">AvailNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">AvailsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">SpliceEventIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">UniqueProgramIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">AvailNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">AvailsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">SpliceEventId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">UniqueProgramId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailNumInput`<sup>Optional</sup> <a name="AvailNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```go
func AvailNumInput() *f64
```

- *Type:* *f64

---

##### `AvailsExpectedInput`<sup>Optional</sup> <a name="AvailsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```go
func AvailsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SpliceEventIdInput`<sup>Optional</sup> <a name="SpliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```go
func SpliceEventIdInput() *f64
```

- *Type:* *f64

---

##### `UniqueProgramIdInput`<sup>Optional</sup> <a name="UniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```go
func UniqueProgramIdInput() *f64
```

- *Type:* *f64

---

##### `AvailNum`<sup>Required</sup> <a name="AvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```go
func AvailNum() *f64
```

- *Type:* *f64

---

##### `AvailsExpected`<sup>Required</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```go
func AvailsExpected() *f64
```

- *Type:* *f64

---

##### `SpliceEventId`<sup>Required</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```go
func SpliceEventId() *f64
```

- *Type:* *f64

---

##### `UniqueProgramId`<sup>Required</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```go
func UniqueProgramId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksTimeSignalMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAdBreaksTimeSignalMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">PutSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">ResetSegmentationDescriptors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentationDescriptors` <a name="PutSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```go
func PutSegmentationDescriptors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSegmentationDescriptors` <a name="ResetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```go
func ResetSegmentationDescriptors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">SegmentationDescriptorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentationDescriptors`<sup>Required</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```go
func SegmentationDescriptors() MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `SegmentationDescriptorsInput`<sup>Optional</sup> <a name="SegmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```go
func SegmentationDescriptorsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```go
func Get(index *f64) MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">ResetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">ResetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">ResetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">ResetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">ResetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">ResetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">ResetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">ResetSubSegmentsExpected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentationEventId` <a name="ResetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```go
func ResetSegmentationEventId()
```

##### `ResetSegmentationTypeId` <a name="ResetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```go
func ResetSegmentationTypeId()
```

##### `ResetSegmentationUpid` <a name="ResetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```go
func ResetSegmentationUpid()
```

##### `ResetSegmentationUpidType` <a name="ResetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```go
func ResetSegmentationUpidType()
```

##### `ResetSegmentNum` <a name="ResetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```go
func ResetSegmentNum()
```

##### `ResetSegmentsExpected` <a name="ResetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```go
func ResetSegmentsExpected()
```

##### `ResetSubSegmentNum` <a name="ResetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```go
func ResetSubSegmentNum()
```

##### `ResetSubSegmentsExpected` <a name="ResetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```go
func ResetSubSegmentsExpected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">SegmentationEventIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">SegmentationTypeIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">SegmentationUpidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">SegmentationUpidTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">SegmentNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">SegmentsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">SubSegmentNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">SubSegmentsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">SegmentationEventId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">SegmentationUpid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">SegmentNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">SegmentsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">SubSegmentNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentationEventIdInput`<sup>Optional</sup> <a name="SegmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```go
func SegmentationEventIdInput() *f64
```

- *Type:* *f64

---

##### `SegmentationTypeIdInput`<sup>Optional</sup> <a name="SegmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```go
func SegmentationTypeIdInput() *f64
```

- *Type:* *f64

---

##### `SegmentationUpidInput`<sup>Optional</sup> <a name="SegmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```go
func SegmentationUpidInput() *string
```

- *Type:* *string

---

##### `SegmentationUpidTypeInput`<sup>Optional</sup> <a name="SegmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```go
func SegmentationUpidTypeInput() *f64
```

- *Type:* *f64

---

##### `SegmentNumInput`<sup>Optional</sup> <a name="SegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```go
func SegmentNumInput() *f64
```

- *Type:* *f64

---

##### `SegmentsExpectedInput`<sup>Optional</sup> <a name="SegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```go
func SegmentsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SubSegmentNumInput`<sup>Optional</sup> <a name="SubSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```go
func SubSegmentNumInput() *f64
```

- *Type:* *f64

---

##### `SubSegmentsExpectedInput`<sup>Optional</sup> <a name="SubSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```go
func SubSegmentsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SegmentationEventId`<sup>Required</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```go
func SegmentationEventId() *f64
```

- *Type:* *f64

---

##### `SegmentationTypeId`<sup>Required</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```go
func SegmentationTypeId() *f64
```

- *Type:* *f64

---

##### `SegmentationUpid`<sup>Required</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```go
func SegmentationUpid() *string
```

- *Type:* *string

---

##### `SegmentationUpidType`<sup>Required</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```go
func SegmentationUpidType() *f64
```

- *Type:* *f64

---

##### `SegmentNum`<sup>Required</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```go
func SegmentNum() *f64
```

- *Type:* *f64

---

##### `SegmentsExpected`<sup>Required</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```go
func SegmentsExpected() *f64
```

- *Type:* *f64

---

##### `SubSegmentNum`<sup>Required</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```go
func SubSegmentNum() *f64
```

- *Type:* *f64

---

##### `SubSegmentsExpected`<sup>Required</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```go
func SubSegmentsExpected() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```go
func Get(index *f64) MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```go
func Get(index *f64) MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata">PutAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate">PutSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage">PutSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage">PutTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata">ResetAdBreakMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis">ResetOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate">ResetSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage">ResetSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage">ResetTimeSignalMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreakMetadata` <a name="PutAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata"></a>

```go
func PutAdBreakMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSlate` <a name="PutSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate"></a>

```go
func PutSlate(value MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `PutSpliceInsertMessage` <a name="PutSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage"></a>

```go
func PutSpliceInsertMessage(value MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `PutTimeSignalMessage` <a name="PutTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage"></a>

```go
func PutTimeSignalMessage(value MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `ResetAdBreakMetadata` <a name="ResetAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata"></a>

```go
func ResetAdBreakMetadata()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType"></a>

```go
func ResetMessageType()
```

##### `ResetOffsetMillis` <a name="ResetOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis"></a>

```go
func ResetOffsetMillis()
```

##### `ResetSlate` <a name="ResetSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate"></a>

```go
func ResetSlate()
```

##### `ResetSpliceInsertMessage` <a name="ResetSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```go
func ResetSpliceInsertMessage()
```

##### `ResetTimeSignalMessage` <a name="ResetTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage"></a>

```go
func ResetTimeSignalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">AdBreakMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">Slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">SpliceInsertMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">TimeSignalMessage</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput">AdBreakMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput">OffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput">SlateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput">SpliceInsertMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput">TimeSignalMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">OffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreakMetadata`<sup>Required</sup> <a name="AdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```go
func AdBreakMetadata() MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `Slate`<sup>Required</sup> <a name="Slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```go
func Slate() MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `SpliceInsertMessage`<sup>Required</sup> <a name="SpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```go
func SpliceInsertMessage() MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `TimeSignalMessage`<sup>Required</sup> <a name="TimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```go
func TimeSignalMessage() MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `AdBreakMetadataInput`<sup>Optional</sup> <a name="AdBreakMetadataInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```go
func AdBreakMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput"></a>

```go
func MessageTypeInput() *string
```

- *Type:* *string

---

##### `OffsetMillisInput`<sup>Optional</sup> <a name="OffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput"></a>

```go
func OffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `SlateInput`<sup>Optional</sup> <a name="SlateInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput"></a>

```go
func SlateInput() interface{}
```

- *Type:* interface{}

---

##### `SpliceInsertMessageInput`<sup>Optional</sup> <a name="SpliceInsertMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```go
func SpliceInsertMessageInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSignalMessageInput`<sup>Optional</sup> <a name="TimeSignalMessageInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```go
func TimeSignalMessageInput() interface{}
```

- *Type:* interface{}

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `OffsetMillis`<sup>Required</sup> <a name="OffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```go
func OffsetMillis() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName">ResetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName">ResetVodSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceLocationName` <a name="ResetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```go
func ResetSourceLocationName()
```

##### `ResetVodSourceName` <a name="ResetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName"></a>

```go
func ResetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```go
func VodSourceNameInput() *string
```

- *Type:* *string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```go
func VodSourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">ResetAvailNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">ResetAvailsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">ResetSpliceEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">ResetUniqueProgramId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailNum` <a name="ResetAvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```go
func ResetAvailNum()
```

##### `ResetAvailsExpected` <a name="ResetAvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```go
func ResetAvailsExpected()
```

##### `ResetSpliceEventId` <a name="ResetSpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```go
func ResetSpliceEventId()
```

##### `ResetUniqueProgramId` <a name="ResetUniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```go
func ResetUniqueProgramId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">AvailNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">AvailsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">SpliceEventIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">UniqueProgramIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">AvailNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">AvailsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">SpliceEventId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">UniqueProgramId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailNumInput`<sup>Optional</sup> <a name="AvailNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```go
func AvailNumInput() *f64
```

- *Type:* *f64

---

##### `AvailsExpectedInput`<sup>Optional</sup> <a name="AvailsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```go
func AvailsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SpliceEventIdInput`<sup>Optional</sup> <a name="SpliceEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```go
func SpliceEventIdInput() *f64
```

- *Type:* *f64

---

##### `UniqueProgramIdInput`<sup>Optional</sup> <a name="UniqueProgramIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```go
func UniqueProgramIdInput() *f64
```

- *Type:* *f64

---

##### `AvailNum`<sup>Required</sup> <a name="AvailNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```go
func AvailNum() *f64
```

- *Type:* *f64

---

##### `AvailsExpected`<sup>Required</sup> <a name="AvailsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```go
func AvailsExpected() *f64
```

- *Type:* *f64

---

##### `SpliceEventId`<sup>Required</sup> <a name="SpliceEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```go
func SpliceEventId() *f64
```

- *Type:* *f64

---

##### `UniqueProgramId`<sup>Required</sup> <a name="UniqueProgramId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```go
func UniqueProgramId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">PutSegmentationDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">ResetSegmentationDescriptors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentationDescriptors` <a name="PutSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```go
func PutSegmentationDescriptors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSegmentationDescriptors` <a name="ResetSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```go
func ResetSegmentationDescriptors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">SegmentationDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">SegmentationDescriptorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentationDescriptors`<sup>Required</sup> <a name="SegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```go
func SegmentationDescriptors() MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `SegmentationDescriptorsInput`<sup>Optional</sup> <a name="SegmentationDescriptorsInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```go
func SegmentationDescriptorsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```go
func Get(index *f64) MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">ResetSegmentationEventId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">ResetSegmentationTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">ResetSegmentationUpid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">ResetSegmentationUpidType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">ResetSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">ResetSegmentsExpected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">ResetSubSegmentNum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">ResetSubSegmentsExpected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentationEventId` <a name="ResetSegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```go
func ResetSegmentationEventId()
```

##### `ResetSegmentationTypeId` <a name="ResetSegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```go
func ResetSegmentationTypeId()
```

##### `ResetSegmentationUpid` <a name="ResetSegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```go
func ResetSegmentationUpid()
```

##### `ResetSegmentationUpidType` <a name="ResetSegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```go
func ResetSegmentationUpidType()
```

##### `ResetSegmentNum` <a name="ResetSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```go
func ResetSegmentNum()
```

##### `ResetSegmentsExpected` <a name="ResetSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```go
func ResetSegmentsExpected()
```

##### `ResetSubSegmentNum` <a name="ResetSubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```go
func ResetSubSegmentNum()
```

##### `ResetSubSegmentsExpected` <a name="ResetSubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```go
func ResetSubSegmentsExpected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">SegmentationEventIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">SegmentationTypeIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">SegmentationUpidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">SegmentationUpidTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">SegmentNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">SegmentsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">SubSegmentNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">SubSegmentsExpectedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">SegmentationEventId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">SegmentationTypeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">SegmentationUpid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">SegmentationUpidType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">SegmentNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">SegmentsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">SubSegmentNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">SubSegmentsExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentationEventIdInput`<sup>Optional</sup> <a name="SegmentationEventIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```go
func SegmentationEventIdInput() *f64
```

- *Type:* *f64

---

##### `SegmentationTypeIdInput`<sup>Optional</sup> <a name="SegmentationTypeIdInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```go
func SegmentationTypeIdInput() *f64
```

- *Type:* *f64

---

##### `SegmentationUpidInput`<sup>Optional</sup> <a name="SegmentationUpidInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```go
func SegmentationUpidInput() *string
```

- *Type:* *string

---

##### `SegmentationUpidTypeInput`<sup>Optional</sup> <a name="SegmentationUpidTypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```go
func SegmentationUpidTypeInput() *f64
```

- *Type:* *f64

---

##### `SegmentNumInput`<sup>Optional</sup> <a name="SegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```go
func SegmentNumInput() *f64
```

- *Type:* *f64

---

##### `SegmentsExpectedInput`<sup>Optional</sup> <a name="SegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```go
func SegmentsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SubSegmentNumInput`<sup>Optional</sup> <a name="SubSegmentNumInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```go
func SubSegmentNumInput() *f64
```

- *Type:* *f64

---

##### `SubSegmentsExpectedInput`<sup>Optional</sup> <a name="SubSegmentsExpectedInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```go
func SubSegmentsExpectedInput() *f64
```

- *Type:* *f64

---

##### `SegmentationEventId`<sup>Required</sup> <a name="SegmentationEventId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```go
func SegmentationEventId() *f64
```

- *Type:* *f64

---

##### `SegmentationTypeId`<sup>Required</sup> <a name="SegmentationTypeId" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```go
func SegmentationTypeId() *f64
```

- *Type:* *f64

---

##### `SegmentationUpid`<sup>Required</sup> <a name="SegmentationUpid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```go
func SegmentationUpid() *string
```

- *Type:* *string

---

##### `SegmentationUpidType`<sup>Required</sup> <a name="SegmentationUpidType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```go
func SegmentationUpidType() *f64
```

- *Type:* *f64

---

##### `SegmentNum`<sup>Required</sup> <a name="SegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```go
func SegmentNum() *f64
```

- *Type:* *f64

---

##### `SegmentsExpected`<sup>Required</sup> <a name="SegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```go
func SegmentsExpected() *f64
```

- *Type:* *f64

---

##### `SubSegmentNum`<sup>Required</sup> <a name="SubSegmentNum" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```go
func SubSegmentNum() *f64
```

- *Type:* *f64

---

##### `SubSegmentsExpected`<sup>Required</sup> <a name="SubSegmentsExpected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```go
func SubSegmentsExpected() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis">ResetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis">ResetStartOffsetMillis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndOffsetMillis` <a name="ResetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis"></a>

```go
func ResetEndOffsetMillis()
```

##### `ResetStartOffsetMillis` <a name="ResetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis"></a>

```go
func ResetStartOffsetMillis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput">EndOffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput">StartOffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndOffsetMillisInput`<sup>Optional</sup> <a name="EndOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput"></a>

```go
func EndOffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `StartOffsetMillisInput`<sup>Optional</sup> <a name="StartOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput"></a>

```go
func StartOffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```go
func EndOffsetMillis() *f64
```

- *Type:* *f64

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```go
func StartOffsetMillis() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaList <a name="MediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAudienceMediaAlternateMediaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```go
func Get(index *f64) MediatailorProgramAudienceMediaAlternateMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaAlternateMediaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAudienceMediaAlternateMediaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange">PutClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange">ResetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis">ResetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName">ResetLiveSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis">ResetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName">ResetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName">ResetVodSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks"></a>

```go
func PutAdBreaks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClipRange` <a name="PutClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange"></a>

```go
func PutClipRange(value MediatailorProgramAudienceMediaAlternateMediaClipRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks"></a>

```go
func ResetAdBreaks()
```

##### `ResetClipRange` <a name="ResetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange"></a>

```go
func ResetClipRange()
```

##### `ResetDurationMillis` <a name="ResetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis"></a>

```go
func ResetDurationMillis()
```

##### `ResetLiveSourceName` <a name="ResetLiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName"></a>

```go
func ResetLiveSourceName()
```

##### `ResetScheduledStartTimeMillis` <a name="ResetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis"></a>

```go
func ResetScheduledStartTimeMillis()
```

##### `ResetSourceLocationName` <a name="ResetSourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName"></a>

```go
func ResetSourceLocationName()
```

##### `ResetVodSourceName` <a name="ResetVodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName"></a>

```go
func ResetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput">ClipRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput">DurationMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput">LiveSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput">ScheduledStartTimeMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">DurationMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">LiveSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```go
func AdBreaks() MediatailorProgramAudienceMediaAlternateMediaAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```go
func ClipRange() MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput"></a>

```go
func AdBreaksInput() interface{}
```

- *Type:* interface{}

---

##### `ClipRangeInput`<sup>Optional</sup> <a name="ClipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput"></a>

```go
func ClipRangeInput() interface{}
```

- *Type:* interface{}

---

##### `DurationMillisInput`<sup>Optional</sup> <a name="DurationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput"></a>

```go
func DurationMillisInput() *f64
```

- *Type:* *f64

---

##### `LiveSourceNameInput`<sup>Optional</sup> <a name="LiveSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput"></a>

```go
func LiveSourceNameInput() *string
```

- *Type:* *string

---

##### `ScheduledStartTimeMillisInput`<sup>Optional</sup> <a name="ScheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput"></a>

```go
func ScheduledStartTimeMillisInput() *f64
```

- *Type:* *f64

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput"></a>

```go
func VodSourceNameInput() *string
```

- *Type:* *string

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```go
func DurationMillis() *f64
```

- *Type:* *f64

---

##### `LiveSourceName`<sup>Required</sup> <a name="LiveSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```go
func LiveSourceName() *string
```

- *Type:* *string

---

##### `ScheduledStartTimeMillis`<sup>Required</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```go
func ScheduledStartTimeMillis() *f64
```

- *Type:* *f64

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```go
func VodSourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaList <a name="MediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorProgramAudienceMediaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get"></a>

```go
func Get(index *f64) MediatailorProgramAudienceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramAudienceMediaOutputReference <a name="MediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramAudienceMediaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorProgramAudienceMediaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia">PutAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia">ResetAlternateMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlternateMedia` <a name="PutAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia"></a>

```go
func PutAlternateMedia(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlternateMedia` <a name="ResetAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia"></a>

```go
func ResetAlternateMedia()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience"></a>

```go
func ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia">AlternateMedia</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput">AlternateMediaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlternateMedia`<sup>Required</sup> <a name="AlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```go
func AlternateMedia() MediatailorProgramAudienceMediaAlternateMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `AlternateMediaInput`<sup>Optional</sup> <a name="AlternateMediaInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput"></a>

```go
func AlternateMediaInput() interface{}
```

- *Type:* interface{}

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramClipRangeOutputReference <a name="MediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramClipRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramClipRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```go
func EndOffsetMillis() *f64
```

- *Type:* *f64

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```go
func StartOffsetMillis() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MediatailorProgramClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a>

---


### MediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="MediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramScheduleConfigurationClipRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramScheduleConfigurationClipRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis">ResetEndOffsetMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis">ResetStartOffsetMillis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndOffsetMillis` <a name="ResetEndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis"></a>

```go
func ResetEndOffsetMillis()
```

##### `ResetStartOffsetMillis` <a name="ResetStartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis"></a>

```go
func ResetStartOffsetMillis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput">EndOffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput">StartOffsetMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">EndOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">StartOffsetMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndOffsetMillisInput`<sup>Optional</sup> <a name="EndOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput"></a>

```go
func EndOffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `StartOffsetMillisInput`<sup>Optional</sup> <a name="StartOffsetMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput"></a>

```go
func StartOffsetMillisInput() *f64
```

- *Type:* *f64

---

##### `EndOffsetMillis`<sup>Required</sup> <a name="EndOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```go
func EndOffsetMillis() *f64
```

- *Type:* *f64

---

##### `StartOffsetMillis`<sup>Required</sup> <a name="StartOffsetMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```go
func StartOffsetMillis() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramScheduleConfigurationOutputReference <a name="MediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramScheduleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramScheduleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange">PutClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition">PutTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange">ResetClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition">ResetTransition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClipRange` <a name="PutClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange"></a>

```go
func PutClipRange(value MediatailorProgramScheduleConfigurationClipRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `PutTransition` <a name="PutTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition"></a>

```go
func PutTransition(value MediatailorProgramScheduleConfigurationTransition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `ResetClipRange` <a name="ResetClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange"></a>

```go
func ResetClipRange()
```

##### `ResetTransition` <a name="ResetTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition"></a>

```go
func ResetTransition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange">ClipRange</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition">Transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput">ClipRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput">TransitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipRange`<sup>Required</sup> <a name="ClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```go
func ClipRange() MediatailorProgramScheduleConfigurationClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `Transition`<sup>Required</sup> <a name="Transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```go
func Transition() MediatailorProgramScheduleConfigurationTransitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `ClipRangeInput`<sup>Optional</sup> <a name="ClipRangeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput"></a>

```go
func ClipRangeInput() interface{}
```

- *Type:* interface{}

---

##### `TransitionInput`<sup>Optional</sup> <a name="TransitionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput"></a>

```go
func TransitionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorProgramScheduleConfigurationTransitionOutputReference <a name="MediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorprogram"

mediatailorprogram.NewMediatailorProgramScheduleConfigurationTransitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorProgramScheduleConfigurationTransitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis">ResetDurationMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition">ResetRelativePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram">ResetRelativeProgram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis">ResetScheduledStartTimeMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationMillis` <a name="ResetDurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis"></a>

```go
func ResetDurationMillis()
```

##### `ResetRelativePosition` <a name="ResetRelativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition"></a>

```go
func ResetRelativePosition()
```

##### `ResetRelativeProgram` <a name="ResetRelativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram"></a>

```go
func ResetRelativeProgram()
```

##### `ResetScheduledStartTimeMillis` <a name="ResetScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis"></a>

```go
func ResetScheduledStartTimeMillis()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput">DurationMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput">RelativePositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput">RelativeProgramInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput">ScheduledStartTimeMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">DurationMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">RelativePosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">RelativeProgram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">ScheduledStartTimeMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationMillisInput`<sup>Optional</sup> <a name="DurationMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput"></a>

```go
func DurationMillisInput() *f64
```

- *Type:* *f64

---

##### `RelativePositionInput`<sup>Optional</sup> <a name="RelativePositionInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput"></a>

```go
func RelativePositionInput() *string
```

- *Type:* *string

---

##### `RelativeProgramInput`<sup>Optional</sup> <a name="RelativeProgramInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput"></a>

```go
func RelativeProgramInput() *string
```

- *Type:* *string

---

##### `ScheduledStartTimeMillisInput`<sup>Optional</sup> <a name="ScheduledStartTimeMillisInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput"></a>

```go
func ScheduledStartTimeMillisInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DurationMillis`<sup>Required</sup> <a name="DurationMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```go
func DurationMillis() *f64
```

- *Type:* *f64

---

##### `RelativePosition`<sup>Required</sup> <a name="RelativePosition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```go
func RelativePosition() *string
```

- *Type:* *string

---

##### `RelativeProgram`<sup>Required</sup> <a name="RelativeProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```go
func RelativeProgram() *string
```

- *Type:* *string

---

##### `ScheduledStartTimeMillis`<sup>Required</sup> <a name="ScheduledStartTimeMillis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```go
func ScheduledStartTimeMillis() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



