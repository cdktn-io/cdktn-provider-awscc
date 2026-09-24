# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktn/provider-awscc.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary awscc_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.NewTranscribeVocabulary(scope Construct, id *string, config TranscribeVocabularyConfig) TranscribeVocabulary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn">ResetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases">ResetPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">ResetVocabularyFileUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataAccessRoleArn` <a name="ResetDataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn"></a>

```go
func ResetDataAccessRoleArn()
```

##### `ResetPhrases` <a name="ResetPhrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```go
func ResetPhrases()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVocabularyFileUri` <a name="ResetVocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```go
func ResetVocabularyFileUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.TranscribeVocabulary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.TranscribeVocabulary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.TranscribeVocabulary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.TranscribeVocabulary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TranscribeVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TranscribeVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState">VocabularyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">PhrasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">VocabularyFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">VocabularyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases">Phrases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```go
func Tags() TranscribeVocabularyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a>

---

##### `VocabularyState`<sup>Required</sup> <a name="VocabularyState" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState"></a>

```go
func VocabularyState() *string
```

- *Type:* *string

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `PhrasesInput`<sup>Optional</sup> <a name="PhrasesInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```go
func PhrasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VocabularyFileUriInput`<sup>Optional</sup> <a name="VocabularyFileUriInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```go
func VocabularyFileUriInput() *string
```

- *Type:* *string

---

##### `VocabularyNameInput`<sup>Optional</sup> <a name="VocabularyNameInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```go
func VocabularyNameInput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Phrases`<sup>Required</sup> <a name="Phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```go
func Phrases() *[]*string
```

- *Type:* *[]*string

---

##### `VocabularyFileUri`<sup>Required</sup> <a name="VocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```go
func VocabularyFileUri() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

&transcribevocabulary.TranscribeVocabularyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LanguageCode: *string,
	VocabularyName: *string,
	DataAccessRoleArn: *string,
	Phrases: *[]*string,
	Tags: interface{},
	VocabularyFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language code that represents the language of the entries in your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | A unique name, chosen by you, for your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">Phrases</a></code> | <code>*[]*string</code> | Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>*string</code> | The Amazon S3 location of the text file that contains your custom vocabulary. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language code that represents the language of the entries in your custom vocabulary.

Each custom vocabulary must contain terms in only one language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```go
VocabularyName *string
```

- *Type:* *string

A unique name, chosen by you, for your custom vocabulary.

This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}

---

##### `DataAccessRoleArn`<sup>Optional</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#data_access_role_arn TranscribeVocabulary#data_access_role_arn}

---

##### `Phrases`<sup>Optional</sup> <a name="Phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```go
Phrases *[]*string
```

- *Type:* *[]*string

Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request.

You cannot use this parameter together with VocabularyFileUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}

---

##### `VocabularyFileUri`<sup>Optional</sup> <a name="VocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```go
VocabularyFileUri *string
```

- *Type:* *string

The Amazon S3 location of the text file that contains your custom vocabulary.

You cannot use this parameter together with Phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}

---

### TranscribeVocabularyTags <a name="TranscribeVocabularyTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

&transcribevocabulary.TranscribeVocabularyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#key TranscribeVocabulary#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#value TranscribeVocabulary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTagsList <a name="TranscribeVocabularyTagsList" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.NewTranscribeVocabularyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscribeVocabularyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get"></a>

```go
func Get(index *f64) TranscribeVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscribeVocabularyTagsOutputReference <a name="TranscribeVocabularyTagsOutputReference" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transcribevocabulary"

transcribevocabulary.NewTranscribeVocabularyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscribeVocabularyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



