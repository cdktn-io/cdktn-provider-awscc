# `transcribeMedicalVocabulary` Submodule <a name="`transcribeMedicalVocabulary` Submodule" id="@cdktn/provider-awscc.transcribeMedicalVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeMedicalVocabulary <a name="TranscribeMedicalVocabulary" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary awscc_transcribe_medical_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.NewTranscribeMedicalVocabulary(scope Construct, id *string, config TranscribeMedicalVocabularyConfig) TranscribeMedicalVocabulary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig">TranscribeMedicalVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig">TranscribeMedicalVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetVocabularyFileUri">ResetVocabularyFileUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVocabularyFileUri` <a name="ResetVocabularyFileUri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetVocabularyFileUri"></a>

```go
func ResetVocabularyFileUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.TranscribeMedicalVocabulary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.TranscribeMedicalVocabulary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.TranscribeMedicalVocabulary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.TranscribeMedicalVocabulary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TranscribeMedicalVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TranscribeMedicalVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeMedicalVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList">TranscribeMedicalVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput">VocabularyFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput">VocabularyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags"></a>

```go
func Tags() TranscribeMedicalVocabularyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList">TranscribeMedicalVocabularyTagsList</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VocabularyFileUriInput`<sup>Optional</sup> <a name="VocabularyFileUriInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput"></a>

```go
func VocabularyFileUriInput() *string
```

- *Type:* *string

---

##### `VocabularyNameInput`<sup>Optional</sup> <a name="VocabularyNameInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput"></a>

```go
func VocabularyNameInput() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `VocabularyFileUri`<sup>Required</sup> <a name="VocabularyFileUri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri"></a>

```go
func VocabularyFileUri() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeMedicalVocabularyConfig <a name="TranscribeMedicalVocabularyConfig" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

&transcribemedicalvocabulary.TranscribeMedicalVocabularyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LanguageCode: *string,
	VocabularyName: *string,
	Tags: interface{},
	VocabularyFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language code of the vocabulary entries. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | The name of the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags associated with the medical vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>*string</code> | The Amazon S3 location of the text file that contains the medical vocabulary. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language code of the vocabulary entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName"></a>

```go
VocabularyName *string
```

- *Type:* *string

The name of the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags associated with the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}

---

##### `VocabularyFileUri`<sup>Optional</sup> <a name="VocabularyFileUri" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri"></a>

```go
VocabularyFileUri *string
```

- *Type:* *string

The Amazon S3 location of the text file that contains the medical vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}

---

### TranscribeMedicalVocabularyTags <a name="TranscribeMedicalVocabularyTags" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

&transcribemedicalvocabulary.TranscribeMedicalVocabularyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#key TranscribeMedicalVocabulary#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/transcribe_medical_vocabulary#value TranscribeMedicalVocabulary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeMedicalVocabularyTagsList <a name="TranscribeMedicalVocabularyTagsList" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.NewTranscribeMedicalVocabularyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscribeMedicalVocabularyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get"></a>

```go
func Get(index *f64) TranscribeMedicalVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeMedicalVocabularyTagsOutputReference <a name="TranscribeMedicalVocabularyTagsOutputReference" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribemedicalvocabulary"

transcribemedicalvocabulary.NewTranscribeMedicalVocabularyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscribeMedicalVocabularyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



