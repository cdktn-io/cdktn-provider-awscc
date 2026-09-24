# `transcribeCallAnalyticsCategory` Submodule <a name="`transcribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeCallAnalyticsCategory <a name="TranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategory(scope Construct, id *string, config TranscribeCallAnalyticsCategoryConfig) TranscribeCallAnalyticsCategory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType">ResetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputType` <a name="ResetInputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType"></a>

```go
func ResetInputType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.TranscribeCallAnalyticsCategory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.TranscribeCallAnalyticsCategory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.TranscribeCallAnalyticsCategory_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.TranscribeCallAnalyticsCategory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput">CategoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput">InputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName">CategoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules"></a>

```go
func Rules() TranscribeCallAnalyticsCategoryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags"></a>

```go
func Tags() TranscribeCallAnalyticsCategoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a>

---

##### `CategoryNameInput`<sup>Optional</sup> <a name="CategoryNameInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput"></a>

```go
func CategoryNameInput() *string
```

- *Type:* *string

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput"></a>

```go
func InputTypeInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName"></a>

```go
func CategoryName() *string
```

- *Type:* *string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallAnalyticsCategoryConfig <a name="TranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CategoryName: *string,
	Rules: interface{},
	InputType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName">CategoryName</a></code> | <code>*string</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules">Rules</a></code> | <code>interface{}</code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType">InputType</a></code> | <code>*string</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags associated with the Call Analytics category. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName"></a>

```go
CategoryName *string
```

- *Type:* *string

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `InputType`<sup>Optional</sup> <a name="InputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType"></a>

```go
InputType *string
```

- *Type:* *string

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

### TranscribeCallAnalyticsCategoryRules <a name="TranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRules {
	InterruptionFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter,
	NonTalkTimeFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter,
	SentimentFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter,
	TranscriptFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}. |

---

##### `InterruptionFilter`<sup>Optional</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter"></a>

```go
InterruptionFilter TranscribeCallAnalyticsCategoryRulesInterruptionFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}.

---

##### `NonTalkTimeFilter`<sup>Optional</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter"></a>

```go
NonTalkTimeFilter TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}.

---

##### `SentimentFilter`<sup>Optional</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter"></a>

```go
SentimentFilter TranscribeCallAnalyticsCategoryRulesSentimentFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}.

---

##### `TranscriptFilter`<sup>Optional</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter"></a>

```go
TranscriptFilter TranscribeCallAnalyticsCategoryRulesTranscriptFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter {
	AbsoluteTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange,
	Negate: interface{},
	ParticipantRole: *string,
	RelativeTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate">Negate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange"></a>

```go
AbsoluteTimeRange TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole"></a>

```go
ParticipantRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange"></a>

```go
RelativeTimeRange TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {
	EndTime: *f64,
	First: *f64,
	Last: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {
	EndPercentage: *f64,
	First: *f64,
	Last: *f64,
	StartPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage"></a>

```go
EndPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage"></a>

```go
StartPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {
	AbsoluteTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange,
	Negate: interface{},
	RelativeTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate">Negate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange"></a>

```go
AbsoluteTimeRange TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange"></a>

```go
RelativeTimeRange TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {
	EndTime: *f64,
	First: *f64,
	Last: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {
	EndPercentage: *f64,
	First: *f64,
	Last: *f64,
	StartPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage"></a>

```go
EndPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage"></a>

```go
StartPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter {
	AbsoluteTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange,
	Negate: interface{},
	ParticipantRole: *string,
	RelativeTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange,
	Sentiments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate">Negate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments">Sentiments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange"></a>

```go
AbsoluteTimeRange TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole"></a>

```go
ParticipantRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange"></a>

```go
RelativeTimeRange TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Sentiments`<sup>Optional</sup> <a name="Sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments"></a>

```go
Sentiments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {
	EndTime: *f64,
	First: *f64,
	Last: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {
	EndPercentage: *f64,
	First: *f64,
	Last: *f64,
	StartPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage"></a>

```go
EndPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage"></a>

```go
StartPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter {
	AbsoluteTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange,
	Negate: interface{},
	ParticipantRole: *string,
	RelativeTimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange,
	Targets: *[]*string,
	TranscriptFilterType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate">Negate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets">Targets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}. |

---

##### `AbsoluteTimeRange`<sup>Optional</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange"></a>

```go
AbsoluteTimeRange TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `ParticipantRole`<sup>Optional</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole"></a>

```go
ParticipantRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `RelativeTimeRange`<sup>Optional</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange"></a>

```go
RelativeTimeRange TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets"></a>

```go
Targets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

##### `TranscriptFilterType`<sup>Optional</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType"></a>

```go
TranscriptFilterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {
	EndTime: *f64,
	First: *f64,
	Last: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {
	EndPercentage: *f64,
	First: *f64,
	Last: *f64,
	StartPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first">First</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last">Last</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `EndPercentage`<sup>Optional</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage"></a>

```go
EndPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `StartPercentage`<sup>Optional</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage"></a>

```go
StartPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryTags <a name="TranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

&transcribecallanalyticscategory.TranscribeCallAnalyticsCategoryTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange"></a>

```go
func PutAbsoluteTimeRange(value TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange"></a>

```go
func PutRelativeTimeRange(value TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange"></a>

```go
func ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole"></a>

```go
func ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange"></a>

```go
func ResetRelativeTimeRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput"></a>

```go
func AbsoluteTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput"></a>

```go
func ParticipantRoleInput() *string
```

- *Type:* *string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput"></a>

```go
func RelativeTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```go
func ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```go
func ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```go
func EndPercentageInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```go
func StartPercentageInput() *f64
```

- *Type:* *f64

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesList <a name="TranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscribeCallAnalyticsCategoryRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get"></a>

```go
func Get(index *f64) TranscribeCallAnalyticsCategoryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange"></a>

```go
func PutAbsoluteTimeRange(value TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange"></a>

```go
func PutRelativeTimeRange(value TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange"></a>

```go
func ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange"></a>

```go
func ResetRelativeTimeRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput"></a>

```go
func AbsoluteTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput"></a>

```go
func RelativeTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```go
func ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```go
func ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```go
func EndPercentageInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```go
func StartPercentageInput() *f64
```

- *Type:* *f64

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesOutputReference <a name="TranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscribeCallAnalyticsCategoryRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter">PutInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter">PutNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter">PutSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter">PutTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter">ResetInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter">ResetNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter">ResetSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter">ResetTranscriptFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterruptionFilter` <a name="PutInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter"></a>

```go
func PutInterruptionFilter(value TranscribeCallAnalyticsCategoryRulesInterruptionFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `PutNonTalkTimeFilter` <a name="PutNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter"></a>

```go
func PutNonTalkTimeFilter(value TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `PutSentimentFilter` <a name="PutSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter"></a>

```go
func PutSentimentFilter(value TranscribeCallAnalyticsCategoryRulesSentimentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `PutTranscriptFilter` <a name="PutTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter"></a>

```go
func PutTranscriptFilter(value TranscribeCallAnalyticsCategoryRulesTranscriptFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `ResetInterruptionFilter` <a name="ResetInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter"></a>

```go
func ResetInterruptionFilter()
```

##### `ResetNonTalkTimeFilter` <a name="ResetNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter"></a>

```go
func ResetNonTalkTimeFilter()
```

##### `ResetSentimentFilter` <a name="ResetSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter"></a>

```go
func ResetSentimentFilter()
```

##### `ResetTranscriptFilter` <a name="ResetTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter"></a>

```go
func ResetTranscriptFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput">InterruptionFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput">NonTalkTimeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput">SentimentFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput">TranscriptFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InterruptionFilter`<sup>Required</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```go
func InterruptionFilter() TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `NonTalkTimeFilter`<sup>Required</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```go
func NonTalkTimeFilter() TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `SentimentFilter`<sup>Required</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```go
func SentimentFilter() TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `TranscriptFilter`<sup>Required</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```go
func TranscriptFilter() TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `InterruptionFilterInput`<sup>Optional</sup> <a name="InterruptionFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput"></a>

```go
func InterruptionFilterInput() interface{}
```

- *Type:* interface{}

---

##### `NonTalkTimeFilterInput`<sup>Optional</sup> <a name="NonTalkTimeFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput"></a>

```go
func NonTalkTimeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `SentimentFilterInput`<sup>Optional</sup> <a name="SentimentFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput"></a>

```go
func SentimentFilterInput() interface{}
```

- *Type:* interface{}

---

##### `TranscriptFilterInput`<sup>Optional</sup> <a name="TranscriptFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput"></a>

```go
func TranscriptFilterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments">ResetSentiments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange"></a>

```go
func PutAbsoluteTimeRange(value TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange"></a>

```go
func PutRelativeTimeRange(value TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange"></a>

```go
func ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole"></a>

```go
func ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange"></a>

```go
func ResetRelativeTimeRange()
```

##### `ResetSentiments` <a name="ResetSentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments"></a>

```go
func ResetSentiments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput">SentimentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">Sentiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput"></a>

```go
func AbsoluteTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput"></a>

```go
func ParticipantRoleInput() *string
```

- *Type:* *string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput"></a>

```go
func RelativeTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `SentimentsInput`<sup>Optional</sup> <a name="SentimentsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput"></a>

```go
func SentimentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `Sentiments`<sup>Required</sup> <a name="Sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```go
func Sentiments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```go
func ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```go
func ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```go
func EndPercentageInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```go
func StartPercentageInput() *f64
```

- *Type:* *f64

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange">PutAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange">PutRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange">ResetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole">ResetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange">ResetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType">ResetTranscriptFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbsoluteTimeRange` <a name="PutAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange"></a>

```go
func PutAbsoluteTimeRange(value TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `PutRelativeTimeRange` <a name="PutRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange"></a>

```go
func PutRelativeTimeRange(value TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `ResetAbsoluteTimeRange` <a name="ResetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange"></a>

```go
func ResetAbsoluteTimeRange()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetParticipantRole` <a name="ResetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole"></a>

```go
func ResetParticipantRole()
```

##### `ResetRelativeTimeRange` <a name="ResetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange"></a>

```go
func ResetRelativeTimeRange()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets"></a>

```go
func ResetTargets()
```

##### `ResetTranscriptFilterType` <a name="ResetTranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType"></a>

```go
func ResetTranscriptFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput">AbsoluteTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput">ParticipantRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput">RelativeTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput">TargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput">TranscriptFilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `AbsoluteTimeRangeInput`<sup>Optional</sup> <a name="AbsoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput"></a>

```go
func AbsoluteTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRoleInput`<sup>Optional</sup> <a name="ParticipantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput"></a>

```go
func ParticipantRoleInput() *string
```

- *Type:* *string

---

##### `RelativeTimeRangeInput`<sup>Optional</sup> <a name="RelativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput"></a>

```go
func RelativeTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput"></a>

```go
func TargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TranscriptFilterTypeInput`<sup>Optional</sup> <a name="TranscriptFilterTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput"></a>

```go
func TranscriptFilterTypeInput() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TranscriptFilterType`<sup>Required</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```go
func TranscriptFilterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage">ResetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage">ResetStartPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPercentage` <a name="ResetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```go
func ResetEndPercentage()
```

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetStartPercentage` <a name="ResetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```go
func ResetStartPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput">EndPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput">StartPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentageInput`<sup>Optional</sup> <a name="EndPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```go
func EndPercentageInput() *f64
```

- *Type:* *f64

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `StartPercentageInput`<sup>Optional</sup> <a name="StartPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```go
func StartPercentageInput() *f64
```

- *Type:* *f64

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryTagsList <a name="TranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscribeCallAnalyticsCategoryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get"></a>

```go
func Get(index *f64) TranscribeCallAnalyticsCategoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeCallAnalyticsCategoryTagsOutputReference <a name="TranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribecallanalyticscategory"

transcribecallanalyticscategory.NewTranscribeCallAnalyticsCategoryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscribeCallAnalyticsCategoryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



