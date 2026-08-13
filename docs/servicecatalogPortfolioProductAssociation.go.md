# `servicecatalogPortfolioProductAssociation` Submodule <a name="`servicecatalogPortfolioProductAssociation` Submodule" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolioProductAssociation <a name="ServicecatalogPortfolioProductAssociation" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association awscc_servicecatalog_portfolio_product_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

servicecatalogportfolioproductassociation.NewServicecatalogPortfolioProductAssociation(scope Construct, id *string, config ServicecatalogPortfolioProductAssociationConfig) ServicecatalogPortfolioProductAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig">ServicecatalogPortfolioProductAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig">ServicecatalogPortfolioProductAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetPortfolioId">ResetPortfolioId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetSourcePortfolioId">ResetSourcePortfolioId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetPortfolioId` <a name="ResetPortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetPortfolioId"></a>

```go
func ResetPortfolioId()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetProductId"></a>

```go
func ResetProductId()
```

##### `ResetSourcePortfolioId` <a name="ResetSourcePortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.resetSourcePortfolioId"></a>

```go
func ResetSourcePortfolioId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolioProductAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

servicecatalogportfolioproductassociation.ServicecatalogPortfolioProductAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

servicecatalogportfolioproductassociation.ServicecatalogPortfolioProductAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

servicecatalogportfolioproductassociation.ServicecatalogPortfolioProductAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

servicecatalogportfolioproductassociation.ServicecatalogPortfolioProductAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicecatalogPortfolioProductAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogPortfolioProductAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogPortfolioProductAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolioProductAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.sourcePortfolioIdInput">SourcePortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.portfolioIdInput"></a>

```go
func PortfolioIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `SourcePortfolioIdInput`<sup>Optional</sup> <a name="SourcePortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.sourcePortfolioIdInput"></a>

```go
func SourcePortfolioIdInput() *string
```

- *Type:* *string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `SourcePortfolioId`<sup>Required</sup> <a name="SourcePortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.sourcePortfolioId"></a>

```go
func SourcePortfolioId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioProductAssociationConfig <a name="ServicecatalogPortfolioProductAssociationConfig" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogportfolioproductassociation"

&servicecatalogportfolioproductassociation.ServicecatalogPortfolioProductAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcceptLanguage: *string,
	PortfolioId: *string,
	ProductId: *string,
	SourcePortfolioId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.productId">ProductId</a></code> | <code>*string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>*string</code> | The identifier of the source portfolio. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association#accept_language ServicecatalogPortfolioProductAssociation#accept_language}

---

##### `PortfolioId`<sup>Optional</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.portfolioId"></a>

```go
PortfolioId *string
```

- *Type:* *string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association#portfolio_id ServicecatalogPortfolioProductAssociation#portfolio_id}

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association#product_id ServicecatalogPortfolioProductAssociation#product_id}

---

##### `SourcePortfolioId`<sup>Optional</sup> <a name="SourcePortfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolioProductAssociation.ServicecatalogPortfolioProductAssociationConfig.property.sourcePortfolioId"></a>

```go
SourcePortfolioId *string
```

- *Type:* *string

The identifier of the source portfolio.

The source portfolio must be a portfolio imported from a different account than the one creating the association. This account must have previously shared this portfolio with the account creating the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio_product_association#source_portfolio_id ServicecatalogPortfolioProductAssociation#source_portfolio_id}

---



