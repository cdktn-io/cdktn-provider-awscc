# `customerprofilesRecommender` Submodule <a name="`customerprofilesRecommender` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommender <a name="CustomerprofilesRecommender" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommender(scope Construct, id *string, config CustomerprofilesRecommenderConfig) CustomerprofilesRecommender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig">PutRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig">ResetRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecommenderConfig` <a name="PutRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig"></a>

```go
func PutRecommenderConfig(value CustomerprofilesRecommenderRecommenderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRecommenderConfig` <a name="ResetRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig"></a>

```go
func ResetRecommenderConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.CustomerprofilesRecommender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.CustomerprofilesRecommender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.CustomerprofilesRecommender_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.CustomerprofilesRecommender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomerprofilesRecommender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomerprofilesRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate">LatestRecommenderUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn">RecommenderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics">TrainingMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput">RecommenderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput">RecommenderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput">RecommenderRecipeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName">RecommenderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName">RecommenderRecipeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `LatestRecommenderUpdate`<sup>Required</sup> <a name="LatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate"></a>

```go
func LatestRecommenderUpdate() CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a>

---

##### `RecommenderArn`<sup>Required</sup> <a name="RecommenderArn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn"></a>

```go
func RecommenderArn() *string
```

- *Type:* *string

---

##### `RecommenderConfig`<sup>Required</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig"></a>

```go
func RecommenderConfig() CustomerprofilesRecommenderRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags"></a>

```go
func Tags() CustomerprofilesRecommenderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a>

---

##### `TrainingMetrics`<sup>Required</sup> <a name="TrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics"></a>

```go
func TrainingMetrics() CustomerprofilesRecommenderTrainingMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `RecommenderConfigInput`<sup>Optional</sup> <a name="RecommenderConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput"></a>

```go
func RecommenderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RecommenderNameInput`<sup>Optional</sup> <a name="RecommenderNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput"></a>

```go
func RecommenderNameInput() *string
```

- *Type:* *string

---

##### `RecommenderRecipeNameInput`<sup>Optional</sup> <a name="RecommenderRecipeNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput"></a>

```go
func RecommenderRecipeNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `RecommenderName`<sup>Required</sup> <a name="RecommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName"></a>

```go
func RecommenderName() *string
```

- *Type:* *string

---

##### `RecommenderRecipeName`<sup>Required</sup> <a name="RecommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName"></a>

```go
func RecommenderRecipeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderConfig <a name="CustomerprofilesRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	RecommenderName: *string,
	RecommenderRecipeName: *string,
	Description: *string,
	RecommenderConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The name of the domain for which the recommender will be created. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName">RecommenderName</a></code> | <code>*string</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName">RecommenderRecipeName</a></code> | <code>*string</code> | The name of the recommender recipe. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description">Description</a></code> | <code>*string</code> | The description of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | Configuration for the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags used to organize, track, or control access for this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The name of the domain for which the recommender will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}

---

##### `RecommenderName`<sup>Required</sup> <a name="RecommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName"></a>

```go
RecommenderName *string
```

- *Type:* *string

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}

---

##### `RecommenderRecipeName`<sup>Required</sup> <a name="RecommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName"></a>

```go
RecommenderRecipeName *string
```

- *Type:* *string

The name of the recommender recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}

---

##### `RecommenderConfig`<sup>Optional</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig"></a>

```go
RecommenderConfig CustomerprofilesRecommenderRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

Configuration for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}

---

### CustomerprofilesRecommenderLatestRecommenderUpdate <a name="CustomerprofilesRecommenderLatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderLatestRecommenderUpdate {

}
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig {

}
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig {

}
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct {

}
```


### CustomerprofilesRecommenderRecommenderConfig <a name="CustomerprofilesRecommenderRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderRecommenderConfig {
	EventsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | Configuration for events used in the recommender. |

---

##### `EventsConfig`<sup>Optional</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig"></a>

```go
EventsConfig CustomerprofilesRecommenderRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

Configuration for events used in the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig {
	EventParametersList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList">EventParametersList</a></code> | <code>interface{}</code> | List of event parameters with their value thresholds. |

---

##### `EventParametersList`<sup>Optional</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList"></a>

```go
EventParametersList interface{}
```

- *Type:* interface{}

List of event parameters with their value thresholds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct {
	EventType: *string,
	EventValueThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType">EventType</a></code> | <code>*string</code> | The type of event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold">EventValueThreshold</a></code> | <code>*f64</code> | The threshold of the event type. |

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_type CustomerprofilesRecommender#event_type}

---

##### `EventValueThreshold`<sup>Optional</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold"></a>

```go
EventValueThreshold *f64
```

- *Type:* *f64

The threshold of the event type.

Only events with a value greater or equal to this threshold will be considered for solution creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_value_threshold CustomerprofilesRecommender#event_value_threshold}

---

### CustomerprofilesRecommenderTags <a name="CustomerprofilesRecommenderTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}.

---

### CustomerprofilesRecommenderTrainingMetrics <a name="CustomerprofilesRecommenderTrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderTrainingMetrics {

}
```


### CustomerprofilesRecommenderTrainingMetricsMetrics <a name="CustomerprofilesRecommenderTrainingMetricsMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

&customerprofilesrecommender.CustomerprofilesRecommenderTrainingMetricsMetrics {

}
```


## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime">CreationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime">LastUpdatedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime"></a>

```go
func CreationDateTime() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `LastUpdatedDateTime`<sup>Required</sup> <a name="LastUpdatedDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime"></a>

```go
func LastUpdatedDateTime() *string
```

- *Type:* *string

---

##### `RecommenderConfig`<sup>Required</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig"></a>

```go
func RecommenderConfig() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderLatestRecommenderUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```go
func Get(index *f64) CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">EventValueThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `EventValueThreshold`<sup>Required</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```go
func EventValueThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList">EventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventParametersList`<sup>Required</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```go
func EventParametersList() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventsConfig`<sup>Required</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig"></a>

```go
func EventsConfig() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```go
func Get(index *f64) CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold">ResetEventValueThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType"></a>

```go
func ResetEventType()
```

##### `ResetEventValueThreshold` <a name="ResetEventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold"></a>

```go
func ResetEventValueThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput">EventValueThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">EventValueThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `EventValueThresholdInput`<sup>Optional</sup> <a name="EventValueThresholdInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput"></a>

```go
func EventValueThresholdInput() *f64
```

- *Type:* *f64

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `EventValueThreshold`<sup>Required</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```go
func EventValueThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList">PutEventParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList">ResetEventParametersList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventParametersList` <a name="PutEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList"></a>

```go
func PutEventParametersList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEventParametersList` <a name="ResetEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList"></a>

```go
func ResetEventParametersList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList">EventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput">EventParametersListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventParametersList`<sup>Required</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```go
func EventParametersList() CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `EventParametersListInput`<sup>Optional</sup> <a name="EventParametersListInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput"></a>

```go
func EventParametersListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderRecommenderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderRecommenderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig">PutEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig">ResetEventsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventsConfig` <a name="PutEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig"></a>

```go
func PutEventsConfig(value CustomerprofilesRecommenderRecommenderConfigEventsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `ResetEventsConfig` <a name="ResetEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig"></a>

```go
func ResetEventsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput">EventsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventsConfig`<sup>Required</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig"></a>

```go
func EventsConfig() CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a>

---

##### `EventsConfigInput`<sup>Optional</sup> <a name="EventsConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput"></a>

```go
func EventsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderTagsList <a name="CustomerprofilesRecommenderTagsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesRecommenderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get"></a>

```go
func Get(index *f64) CustomerprofilesRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderTagsOutputReference <a name="CustomerprofilesRecommenderTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesRecommenderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesRecommenderTrainingMetricsList <a name="CustomerprofilesRecommenderTrainingMetricsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderTrainingMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesRecommenderTrainingMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get"></a>

```go
func Get(index *f64) CustomerprofilesRecommenderTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage">Coverage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness">Freshness</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit">Hit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity">Popularity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall">Recall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity">Similarity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Coverage`<sup>Required</sup> <a name="Coverage" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage"></a>

```go
func Coverage() *f64
```

- *Type:* *f64

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness"></a>

```go
func Freshness() *f64
```

- *Type:* *f64

---

##### `Hit`<sup>Required</sup> <a name="Hit" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit"></a>

```go
func Hit() *f64
```

- *Type:* *f64

---

##### `Popularity`<sup>Required</sup> <a name="Popularity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity"></a>

```go
func Popularity() *f64
```

- *Type:* *f64

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall"></a>

```go
func Recall() *f64
```

- *Type:* *f64

---

##### `Similarity`<sup>Required</sup> <a name="Similarity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity"></a>

```go
func Similarity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderTrainingMetricsMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a>

---


### CustomerprofilesRecommenderTrainingMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilesrecommender"

customerprofilesrecommender.NewCustomerprofilesRecommenderTrainingMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesRecommenderTrainingMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics"></a>

```go
func Metrics() CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesRecommenderTrainingMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a>

---



