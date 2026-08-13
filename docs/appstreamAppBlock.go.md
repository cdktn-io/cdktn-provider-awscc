# `appstreamAppBlock` Submodule <a name="`appstreamAppBlock` Submodule" id="@cdktn/provider-awscc.appstreamAppBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlock <a name="AppstreamAppBlock" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block awscc_appstream_app_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlock(scope Construct, id *string, config AppstreamAppBlockConfig) AppstreamAppBlock
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails">PutPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails">PutSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location">PutSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType">ResetPackagingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails">ResetPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails">ResetSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPostSetupScriptDetails` <a name="PutPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails"></a>

```go
func PutPostSetupScriptDetails(value AppstreamAppBlockPostSetupScriptDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `PutSetupScriptDetails` <a name="PutSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails"></a>

```go
func PutSetupScriptDetails(value AppstreamAppBlockSetupScriptDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `PutSourceS3Location` <a name="PutSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location"></a>

```go
func PutSourceS3Location(value AppstreamAppBlockSourceS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetPackagingType` <a name="ResetPackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType"></a>

```go
func ResetPackagingType()
```

##### `ResetPostSetupScriptDetails` <a name="ResetPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails"></a>

```go
func ResetPostSetupScriptDetails()
```

##### `ResetSetupScriptDetails` <a name="ResetSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails"></a>

```go
func ResetSetupScriptDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.AppstreamAppBlock_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.AppstreamAppBlock_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.AppstreamAppBlock_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.AppstreamAppBlock_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppstreamAppBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppstreamAppBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails">PostSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails">SetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location">SourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput">PackagingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput">PostSetupScriptDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput">SetupScriptDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput">SourceS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType">PackagingType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PostSetupScriptDetails`<sup>Required</sup> <a name="PostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails"></a>

```go
func PostSetupScriptDetails() AppstreamAppBlockPostSetupScriptDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a>

---

##### `SetupScriptDetails`<sup>Required</sup> <a name="SetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails"></a>

```go
func SetupScriptDetails() AppstreamAppBlockSetupScriptDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a>

---

##### `SourceS3Location`<sup>Required</sup> <a name="SourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location"></a>

```go
func SourceS3Location() AppstreamAppBlockSourceS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags"></a>

```go
func Tags() AppstreamAppBlockTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PackagingTypeInput`<sup>Optional</sup> <a name="PackagingTypeInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput"></a>

```go
func PackagingTypeInput() *string
```

- *Type:* *string

---

##### `PostSetupScriptDetailsInput`<sup>Optional</sup> <a name="PostSetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput"></a>

```go
func PostSetupScriptDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `SetupScriptDetailsInput`<sup>Optional</sup> <a name="SetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput"></a>

```go
func SetupScriptDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceS3LocationInput`<sup>Optional</sup> <a name="SourceS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput"></a>

```go
func SourceS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackagingType`<sup>Required</sup> <a name="PackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType"></a>

```go
func PackagingType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockConfig <a name="AppstreamAppBlockConfig" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SourceS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location,
	Description: *string,
	DisplayName: *string,
	PackagingType: *string,
	PostSetupScriptDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails,
	SetupScriptDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location">SourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType">PackagingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails">PostSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails">SetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `SourceS3Location`<sup>Required</sup> <a name="SourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location"></a>

```go
SourceS3Location AppstreamAppBlockSourceS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `PackagingType`<sup>Optional</sup> <a name="PackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType"></a>

```go
PackagingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `PostSetupScriptDetails`<sup>Optional</sup> <a name="PostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails"></a>

```go
PostSetupScriptDetails AppstreamAppBlockPostSetupScriptDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `SetupScriptDetails`<sup>Optional</sup> <a name="SetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails"></a>

```go
SetupScriptDetails AppstreamAppBlockSetupScriptDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

### AppstreamAppBlockPostSetupScriptDetails <a name="AppstreamAppBlockPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockPostSetupScriptDetails {
	ExecutableParameters: *string,
	ExecutablePath: *string,
	ScriptS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters">ExecutableParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath">ExecutablePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `ExecutableParameters`<sup>Optional</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters"></a>

```go
ExecutableParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `ExecutablePath`<sup>Optional</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath"></a>

```go
ExecutablePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `ScriptS3Location`<sup>Optional</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location"></a>

```go
ScriptS3Location AppstreamAppBlockPostSetupScriptDetailsScriptS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockPostSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location {
	S3Bucket: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSetupScriptDetails <a name="AppstreamAppBlockSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockSetupScriptDetails {
	ExecutableParameters: *string,
	ExecutablePath: *string,
	ScriptS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters">ExecutableParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath">ExecutablePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `ExecutableParameters`<sup>Optional</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters"></a>

```go
ExecutableParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `ExecutablePath`<sup>Optional</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath"></a>

```go
ExecutablePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `ScriptS3Location`<sup>Optional</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location"></a>

```go
ScriptS3Location AppstreamAppBlockSetupScriptDetailsScriptS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockSetupScriptDetailsScriptS3Location {
	S3Bucket: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSourceS3Location <a name="AppstreamAppBlockSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockSourceS3Location {
	S3Bucket: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockTags <a name="AppstreamAppBlockTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

&appstreamappblock.AppstreamAppBlockTags {
	Key: *string,
	TagKey: *string,
	TagValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockPostSetupScriptDetailsOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockPostSetupScriptDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamAppBlockPostSetupScriptDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location">PutScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters">ResetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath">ResetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location">ResetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptS3Location` <a name="PutScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```go
func PutScriptS3Location(value AppstreamAppBlockPostSetupScriptDetailsScriptS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `ResetExecutableParameters` <a name="ResetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```go
func ResetExecutableParameters()
```

##### `ResetExecutablePath` <a name="ResetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```go
func ResetExecutablePath()
```

##### `ResetScriptS3Location` <a name="ResetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```go
func ResetScriptS3Location()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput">ExecutableParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput">ExecutablePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput">ScriptS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters">ExecutableParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath">ExecutablePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptS3Location`<sup>Required</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```go
func ScriptS3Location() AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `ExecutableParametersInput`<sup>Optional</sup> <a name="ExecutableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```go
func ExecutableParametersInput() *string
```

- *Type:* *string

---

##### `ExecutablePathInput`<sup>Optional</sup> <a name="ExecutablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```go
func ExecutablePathInput() *string
```

- *Type:* *string

---

##### `ScriptS3LocationInput`<sup>Optional</sup> <a name="ScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```go
func ScriptS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ExecutableParameters`<sup>Required</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters"></a>

```go
func ExecutableParameters() *string
```

- *Type:* *string

---

##### `ExecutablePath`<sup>Required</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath"></a>

```go
func ExecutablePath() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```go
func ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockSetupScriptDetailsOutputReference <a name="AppstreamAppBlockSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockSetupScriptDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamAppBlockSetupScriptDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location">PutScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters">ResetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath">ResetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location">ResetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptS3Location` <a name="PutScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```go
func PutScriptS3Location(value AppstreamAppBlockSetupScriptDetailsScriptS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `ResetExecutableParameters` <a name="ResetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```go
func ResetExecutableParameters()
```

##### `ResetExecutablePath` <a name="ResetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```go
func ResetExecutablePath()
```

##### `ResetScriptS3Location` <a name="ResetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```go
func ResetScriptS3Location()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location">ScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput">ExecutableParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput">ExecutablePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput">ScriptS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters">ExecutableParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath">ExecutablePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptS3Location`<sup>Required</sup> <a name="ScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```go
func ScriptS3Location() AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `ExecutableParametersInput`<sup>Optional</sup> <a name="ExecutableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```go
func ExecutableParametersInput() *string
```

- *Type:* *string

---

##### `ExecutablePathInput`<sup>Optional</sup> <a name="ExecutablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```go
func ExecutablePathInput() *string
```

- *Type:* *string

---

##### `ScriptS3LocationInput`<sup>Optional</sup> <a name="ScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```go
func ScriptS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ExecutableParameters`<sup>Required</sup> <a name="ExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters"></a>

```go
func ExecutableParameters() *string
```

- *Type:* *string

---

##### `ExecutablePath`<sup>Required</sup> <a name="ExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath"></a>

```go
func ExecutablePath() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```go
func ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockSourceS3LocationOutputReference <a name="AppstreamAppBlockSourceS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockSourceS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamAppBlockSourceS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key"></a>

```go
func ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockTagsList <a name="AppstreamAppBlockTagsList" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppstreamAppBlockTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get"></a>

```go
func Get(index *f64) AppstreamAppBlockTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppstreamAppBlockTagsOutputReference <a name="AppstreamAppBlockTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appstreamappblock"

appstreamappblock.NewAppstreamAppBlockTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppstreamAppBlockTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



