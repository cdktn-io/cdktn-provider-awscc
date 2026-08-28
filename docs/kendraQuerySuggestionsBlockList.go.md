# `kendraQuerySuggestionsBlockList` Submodule <a name="`kendraQuerySuggestionsBlockList` Submodule" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraQuerySuggestionsBlockList <a name="KendraQuerySuggestionsBlockList" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list awscc_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.NewKendraQuerySuggestionsBlockList(scope Construct, id *string, config KendraQuerySuggestionsBlockListConfig) KendraQuerySuggestionsBlockList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path">PutSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceS3Path` <a name="PutSourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path"></a>

```go
func PutSourceS3Path(value KendraQuerySuggestionsBlockListSourceS3Path)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KendraQuerySuggestionsBlockList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KendraQuerySuggestionsBlockList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KendraQuerySuggestionsBlockList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">QuerySuggestionsBlockListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path">SourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList">KendraQuerySuggestionsBlockListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput">SourceS3PathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QuerySuggestionsBlockListId`<sup>Required</sup> <a name="QuerySuggestionsBlockListId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```go
func QuerySuggestionsBlockListId() *string
```

- *Type:* *string

---

##### `SourceS3Path`<sup>Required</sup> <a name="SourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```go
func SourceS3Path() KendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags"></a>

```go
func Tags() KendraQuerySuggestionsBlockListTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList">KendraQuerySuggestionsBlockListTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SourceS3PathInput`<sup>Optional</sup> <a name="SourceS3PathInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput"></a>

```go
func SourceS3PathInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraQuerySuggestionsBlockListConfig <a name="KendraQuerySuggestionsBlockListConfig" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

&kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IndexId: *string,
	Name: *string,
	RoleArn: *string,
	SourceS3Path: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId">IndexId</a></code> | <code>*string</code> | The identifier of the index for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name">Name</a></code> | <code>*string</code> | The name of the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path">SourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | Information required to find a specific file in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description">Description</a></code> | <code>*string</code> | A description for the block list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that identify or categorize the block list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

The identifier of the index for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}

---

##### `SourceS3Path`<sup>Required</sup> <a name="SourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path"></a>

```go
SourceS3Path KendraQuerySuggestionsBlockListSourceS3Path
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

Information required to find a specific file in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that identify or categorize the block list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}

---

### KendraQuerySuggestionsBlockListSourceS3Path <a name="KendraQuerySuggestionsBlockListSourceS3Path" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

&kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockListSourceS3Path {
	Bucket: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the S3 bucket that contains the file. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key">Key</a></code> | <code>*string</code> | The name of the file. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the S3 bucket that contains the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}

---

### KendraQuerySuggestionsBlockListTags <a name="KendraQuerySuggestionsBlockListTags" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

&kendraquerysuggestionsblocklist.KendraQuerySuggestionsBlockListTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.key">Key</a></code> | <code>*string</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.value">Value</a></code> | <code>*string</code> | The value associated with the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_query_suggestions_block_list#value KendraQuerySuggestionsBlockList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="KendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.NewKendraQuerySuggestionsBlockListSourceS3PathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraQuerySuggestionsBlockListTagsList <a name="KendraQuerySuggestionsBlockListTagsList" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.NewKendraQuerySuggestionsBlockListTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraQuerySuggestionsBlockListTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get"></a>

```go
func Get(index *f64) KendraQuerySuggestionsBlockListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraQuerySuggestionsBlockListTagsOutputReference <a name="KendraQuerySuggestionsBlockListTagsOutputReference" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kendraquerysuggestionsblocklist"

kendraquerysuggestionsblocklist.NewKendraQuerySuggestionsBlockListTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraQuerySuggestionsBlockListTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



