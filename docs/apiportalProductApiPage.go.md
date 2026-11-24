# `apiportalProductApiPage` Submodule <a name="`apiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.apiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductApiPage <a name="ApiportalProductApiPage" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPage(scope Construct, id *string, config ApiportalProductApiPageConfig) ApiportalProductApiPage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig">ApiportalProductApiPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig">ApiportalProductApiPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent">PutDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent">ResetDisplayContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId">ResetManagedApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState">ResetTryItState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisplayContent` <a name="PutDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent"></a>

```go
func PutDisplayContent(value ApiportalProductApiPageDisplayContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putDisplayContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayContent` <a name="ResetDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetDisplayContent"></a>

```go
func ResetDisplayContent()
```

##### `ResetManagedApiId` <a name="ResetManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetManagedApiId"></a>

```go
func ResetManagedApiId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTryItState` <a name="ResetTryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.resetTryItState"></a>

```go
func ResetTryItState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.ApiportalProductApiPage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.ApiportalProductApiPage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.ApiportalProductApiPage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.ApiportalProductApiPage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiportalProductApiPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId">ApiId</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent">DisplayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn">ProductApiPageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId">ProductApiPageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException">StatusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput">DisplayContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput">ManagedApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput">TryItStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId">ManagedApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState">TryItState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.apiId"></a>

```go
func ApiId() ApiportalProductApiPageApiIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference">ApiportalProductApiPageApiIdOutputReference</a>

---

##### `DisplayContent`<sup>Required</sup> <a name="DisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContent"></a>

```go
func DisplayContent() ApiportalProductApiPageDisplayContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference">ApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProductApiPageArn`<sup>Required</sup> <a name="ProductApiPageArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageArn"></a>

```go
func ProductApiPageArn() *string
```

- *Type:* *string

---

##### `ProductApiPageId`<sup>Required</sup> <a name="ProductApiPageId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productApiPageId"></a>

```go
func ProductApiPageId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusException`<sup>Required</sup> <a name="StatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.statusException"></a>

```go
func StatusException() ApiportalProductApiPageStatusExceptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference">ApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tags"></a>

```go
func Tags() ApiportalProductApiPageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList">ApiportalProductApiPageTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DisplayContentInput`<sup>Optional</sup> <a name="DisplayContentInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.displayContentInput"></a>

```go
func DisplayContentInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedApiIdInput`<sup>Optional</sup> <a name="ManagedApiIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiIdInput"></a>

```go
func ManagedApiIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TryItStateInput`<sup>Optional</sup> <a name="TryItStateInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItStateInput"></a>

```go
func TryItStateInput() *string
```

- *Type:* *string

---

##### `ManagedApiId`<sup>Required</sup> <a name="ManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.managedApiId"></a>

```go
func ManagedApiId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `TryItState`<sup>Required</sup> <a name="TryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tryItState"></a>

```go
func TryItState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductApiPageApiId <a name="ApiportalProductApiPageApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageApiId {

}
```


### ApiportalProductApiPageApiIdIdentifierParts <a name="ApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageApiIdIdentifierParts {

}
```


### ApiportalProductApiPageConfig <a name="ApiportalProductApiPageConfig" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProductId: *string,
	DisplayContent: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apiportalProductApiPage.ApiportalProductApiPageDisplayContent,
	ManagedApiId: *string,
	Tags: interface{},
	TryItState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId">ProductId</a></code> | <code>*string</code> | The identifier of the parent Product. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent">DisplayContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a></code> | Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId">ManagedApiId</a></code> | <code>*string</code> | Identifier of the Managed API this page documents. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the product API page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState">TryItState</a></code> | <code>*string</code> | Whether the interactive TryIt UI is enabled for this API. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

The identifier of the parent Product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}

---

##### `DisplayContent`<sup>Optional</sup> <a name="DisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.displayContent"></a>

```go
DisplayContent ApiportalProductApiPageDisplayContent
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent">ApiportalProductApiPageDisplayContent</a>

Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}

---

##### `ManagedApiId`<sup>Optional</sup> <a name="ManagedApiId" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.managedApiId"></a>

```go
ManagedApiId *string
```

- *Type:* *string

Identifier of the Managed API this page documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the product API page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}

---

##### `TryItState`<sup>Optional</sup> <a name="TryItState" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageConfig.property.tryItState"></a>

```go
TryItState *string
```

- *Type:* *string

Whether the interactive TryIt UI is enabled for this API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}

---

### ApiportalProductApiPageDisplayContent <a name="ApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageDisplayContent {
	None: *string,
	Overrides: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none">None</a></code> | <code>*string</code> | Marker selecting the default service-rendered content with no overrides. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a></code> | Customer-supplied overrides for the service-rendered API documentation. |

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.none"></a>

```go
None *string
```

- *Type:* *string

Marker selecting the default service-rendered content with no overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContent.property.overrides"></a>

```go
Overrides ApiportalProductApiPageDisplayContentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

Customer-supplied overrides for the service-rendered API documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}

---

### ApiportalProductApiPageDisplayContentOverrides <a name="ApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageDisplayContentOverrides {
	ApiUrl: *string,
	Body: *string,
	OperationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | Override for the API URL. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body">Body</a></code> | <code>*string</code> | Override for the documentation body. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName">OperationName</a></code> | <code>*string</code> | Override for the operation name. |

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

Override for the API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.body"></a>

```go
Body *string
```

- *Type:* *string

Override for the documentation body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides.property.operationName"></a>

```go
OperationName *string
```

- *Type:* *string

Override for the operation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}

---

### ApiportalProductApiPageStatusException <a name="ApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageStatusException {

}
```


### ApiportalProductApiPageTags <a name="ApiportalProductApiPageTags" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

&apiportalproductapipage.ApiportalProductApiPageTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="ApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageApiIdIdentifierPartsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalProductApiPageApiIdIdentifierPartsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiportalProductApiPageApiIdIdentifierParts
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierParts">ApiportalProductApiPageApiIdIdentifierParts</a>

---


### ApiportalProductApiPageApiIdOutputReference <a name="ApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageApiIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalProductApiPageApiIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts">IdentifierParts</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierParts`<sup>Required</sup> <a name="IdentifierParts" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```go
func IdentifierParts() ApiportalProductApiPageApiIdIdentifierPartsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdIdentifierPartsOutputReference">ApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiportalProductApiPageApiId
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageApiId">ApiportalProductApiPageApiId</a>

---


### ApiportalProductApiPageDisplayContentOutputReference <a name="ApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageDisplayContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalProductApiPageDisplayContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides"></a>

```go
func PutOverrides(value ApiportalProductApiPageDisplayContentOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverrides">ApiportalProductApiPageDisplayContentOverrides</a>

---

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetNone"></a>

```go
func ResetNone()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.resetOverrides"></a>

```go
func ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput">NoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none">None</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```go
func Overrides() ApiportalProductApiPageDisplayContentOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference">ApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.noneInput"></a>

```go
func NoneInput() *string
```

- *Type:* *string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```go
func None() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalProductApiPageDisplayContentOverridesOutputReference <a name="ApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageDisplayContentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalProductApiPageDisplayContentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName">ResetOperationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.resetOperationName"></a>

```go
func ResetOperationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput">OperationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationNameInput"></a>

```go
func OperationNameInput() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalProductApiPageStatusExceptionOutputReference <a name="ApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageStatusExceptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiportalProductApiPageStatusExceptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception">Exception</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exception`<sup>Required</sup> <a name="Exception" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```go
func Exception() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiportalProductApiPageStatusException
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageStatusException">ApiportalProductApiPageStatusException</a>

---


### ApiportalProductApiPageTagsList <a name="ApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiportalProductApiPageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get"></a>

```go
func Get(index *f64) ApiportalProductApiPageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiportalProductApiPageTagsOutputReference <a name="ApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apiportalproductapipage"

apiportalproductapipage.NewApiportalProductApiPageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiportalProductApiPageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apiportalProductApiPage.ApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



