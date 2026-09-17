# `kendraFeaturedResultsSet` Submodule <a name="`kendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.kendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraFeaturedResultsSet <a name="KendraFeaturedResultsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.NewKendraFeaturedResultsSet(scope Construct, id *string, config KendraFeaturedResultsSetConfig) KendraFeaturedResultsSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments">PutFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments">ResetFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts">ResetQueryTexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeaturedDocuments` <a name="PutFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments"></a>

```go
func PutFeaturedDocuments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFeaturedDocuments` <a name="ResetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments"></a>

```go
func ResetFeaturedDocuments()
```

##### `ResetQueryTexts` <a name="ResetQueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts"></a>

```go
func ResetQueryTexts()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.KendraFeaturedResultsSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.KendraFeaturedResultsSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.KendraFeaturedResultsSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.KendraFeaturedResultsSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KendraFeaturedResultsSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments">FeaturedDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId">FeaturedResultsSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput">FeaturedDocumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput">FeaturedResultsSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput">QueryTextsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName">FeaturedResultsSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts">QueryTexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FeaturedDocuments`<sup>Required</sup> <a name="FeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments"></a>

```go
func FeaturedDocuments() KendraFeaturedResultsSetFeaturedDocumentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `FeaturedResultsSetId`<sup>Required</sup> <a name="FeaturedResultsSetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```go
func FeaturedResultsSetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags"></a>

```go
func Tags() KendraFeaturedResultsSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeaturedDocumentsInput`<sup>Optional</sup> <a name="FeaturedDocumentsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput"></a>

```go
func FeaturedDocumentsInput() interface{}
```

- *Type:* interface{}

---

##### `FeaturedResultsSetNameInput`<sup>Optional</sup> <a name="FeaturedResultsSetNameInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput"></a>

```go
func FeaturedResultsSetNameInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `QueryTextsInput`<sup>Optional</sup> <a name="QueryTextsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput"></a>

```go
func QueryTextsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FeaturedResultsSetName`<sup>Required</sup> <a name="FeaturedResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```go
func FeaturedResultsSetName() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `QueryTexts`<sup>Required</sup> <a name="QueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts"></a>

```go
func QueryTexts() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraFeaturedResultsSetConfig <a name="KendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

&kendrafeaturedresultsset.KendraFeaturedResultsSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeaturedResultsSetName: *string,
	IndexId: *string,
	Description: *string,
	FeaturedDocuments: interface{},
	QueryTexts: *[]*string,
	Status: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName">FeaturedResultsSetName</a></code> | <code>*string</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId">IndexId</a></code> | <code>*string</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description">Description</a></code> | <code>*string</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments">FeaturedDocuments</a></code> | <code>interface{}</code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts">QueryTexts</a></code> | <code>*[]*string</code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status">Status</a></code> | <code>*string</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeaturedResultsSetName`<sup>Required</sup> <a name="FeaturedResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName"></a>

```go
FeaturedResultsSetName *string
```

- *Type:* *string

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `FeaturedDocuments`<sup>Optional</sup> <a name="FeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments"></a>

```go
FeaturedDocuments interface{}
```

- *Type:* interface{}

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `QueryTexts`<sup>Optional</sup> <a name="QueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts"></a>

```go
QueryTexts *[]*string
```

- *Type:* *[]*string

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

### KendraFeaturedResultsSetFeaturedDocuments <a name="KendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

&kendrafeaturedresultsset.KendraFeaturedResultsSetFeaturedDocuments {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id">Id</a></code> | <code>*string</code> | The identifier of the document to feature in the search results. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id"></a>

```go
Id *string
```

- *Type:* *string

The identifier of the document to feature in the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### KendraFeaturedResultsSetTags <a name="KendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

&kendrafeaturedresultsset.KendraFeaturedResultsSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key">Key</a></code> | <code>*string</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value">Value</a></code> | <code>*string</code> | The value associated with the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraFeaturedResultsSetFeaturedDocumentsList <a name="KendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.NewKendraFeaturedResultsSetFeaturedDocumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraFeaturedResultsSetFeaturedDocumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```go
func Get(index *f64) KendraFeaturedResultsSetFeaturedDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="KendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.NewKendraFeaturedResultsSetFeaturedDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraFeaturedResultsSetFeaturedDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraFeaturedResultsSetTagsList <a name="KendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.NewKendraFeaturedResultsSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraFeaturedResultsSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get"></a>

```go
func Get(index *f64) KendraFeaturedResultsSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraFeaturedResultsSetTagsOutputReference <a name="KendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendrafeaturedresultsset"

kendrafeaturedresultsset.NewKendraFeaturedResultsSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraFeaturedResultsSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



