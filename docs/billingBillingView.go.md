# `billingBillingView` Submodule <a name="`billingBillingView` Submodule" id="@cdktn/provider-awscc.billingBillingView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBillingView <a name="BillingBillingView" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view awscc_billing_billing_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingView(scope Construct, id *string, config BillingBillingViewConfig) BillingBillingView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig">BillingBillingViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig">BillingBillingViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression">PutDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression">ResetDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataFilterExpression` <a name="PutDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression"></a>

```go
func PutDataFilterExpression(value BillingBillingViewDataFilterExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataFilterExpression` <a name="ResetDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression"></a>

```go
func ResetDataFilterExpression()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.BillingBillingView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.BillingBillingView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.BillingBillingView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.BillingBillingView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BillingBillingView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BillingBillingView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BillingBillingView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType">BillingViewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression">DataFilterExpression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput">DataFilterExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput">SourceViewsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews">SourceViews</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BillingViewType`<sup>Required</sup> <a name="BillingViewType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType"></a>

```go
func BillingViewType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `DataFilterExpression`<sup>Required</sup> <a name="DataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression"></a>

```go
func DataFilterExpression() BillingBillingViewDataFilterExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags"></a>

```go
func Tags() BillingBillingViewTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `DataFilterExpressionInput`<sup>Optional</sup> <a name="DataFilterExpressionInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput"></a>

```go
func DataFilterExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceViewsInput`<sup>Optional</sup> <a name="SourceViewsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput"></a>

```go
func SourceViewsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceViews`<sup>Required</sup> <a name="SourceViews" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews"></a>

```go
func SourceViews() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBillingViewConfig <a name="BillingBillingViewConfig" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SourceViews: *[]*string,
	DataFilterExpression: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingBillingView.BillingBillingViewDataFilterExpression,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#name BillingBillingView#name}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews">SourceViews</a></code> | <code>*[]*string</code> | An array of strings that define the billing view's source. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression">DataFilterExpression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#description BillingBillingView#description}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs associated to the billing view being created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#name BillingBillingView#name}.

---

##### `SourceViews`<sup>Required</sup> <a name="SourceViews" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews"></a>

```go
SourceViews *[]*string
```

- *Type:* *[]*string

An array of strings that define the billing view's source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#source_views BillingBillingView#source_views}

---

##### `DataFilterExpression`<sup>Optional</sup> <a name="DataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression"></a>

```go
DataFilterExpression BillingBillingViewDataFilterExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#description BillingBillingView#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs associated to the billing view being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}

---

### BillingBillingViewDataFilterExpression <a name="BillingBillingViewDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewDataFilterExpression {
	Dimensions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions,
	Tags: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags,
	TimeRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange">TimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions"></a>

```go
Dimensions BillingBillingViewDataFilterExpressionDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags"></a>

```go
Tags BillingBillingViewDataFilterExpressionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}.

---

##### `TimeRange`<sup>Optional</sup> <a name="TimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange"></a>

```go
TimeRange BillingBillingViewDataFilterExpressionTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}.

---

### BillingBillingViewDataFilterExpressionDimensions <a name="BillingBillingViewDataFilterExpressionDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewDataFilterExpressionDimensions {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTags <a name="BillingBillingViewDataFilterExpressionTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewDataFilterExpressionTags {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTimeRange <a name="BillingBillingViewDataFilterExpressionTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewDataFilterExpressionTimeRange {
	BeginDateInclusive: *string,
	EndDateInclusive: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive">BeginDateInclusive</a></code> | <code>*string</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive">EndDateInclusive</a></code> | <code>*string</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |

---

##### `BeginDateInclusive`<sup>Optional</sup> <a name="BeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive"></a>

```go
BeginDateInclusive *string
```

- *Type:* *string

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#begin_date_inclusive BillingBillingView#begin_date_inclusive}

---

##### `EndDateInclusive`<sup>Optional</sup> <a name="EndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive"></a>

```go
EndDateInclusive *string
```

- *Type:* *string

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#end_date_inclusive BillingBillingView#end_date_inclusive}

---

### BillingBillingViewTags <a name="BillingBillingViewTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

&billingbillingview.BillingBillingViewTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#key BillingBillingView#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billing_billing_view#value BillingBillingView#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBillingViewDataFilterExpressionDimensionsOutputReference <a name="BillingBillingViewDataFilterExpressionDimensionsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewDataFilterExpressionDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBillingViewDataFilterExpressionDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBillingViewDataFilterExpressionOutputReference <a name="BillingBillingViewDataFilterExpressionOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewDataFilterExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBillingViewDataFilterExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange">PutTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange">ResetTimeRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions"></a>

```go
func PutDimensions(value BillingBillingViewDataFilterExpressionDimensions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags"></a>

```go
func PutTags(value BillingBillingViewDataFilterExpressionTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---

##### `PutTimeRange` <a name="PutTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange"></a>

```go
func PutTimeRange(value BillingBillingViewDataFilterExpressionTimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeRange` <a name="ResetTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange"></a>

```go
func ResetTimeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange">TimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput">TimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions"></a>

```go
func Dimensions() BillingBillingViewDataFilterExpressionDimensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags"></a>

```go
func Tags() BillingBillingViewDataFilterExpressionTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a>

---

##### `TimeRange`<sup>Required</sup> <a name="TimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange"></a>

```go
func TimeRange() BillingBillingViewDataFilterExpressionTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeRangeInput`<sup>Optional</sup> <a name="TimeRangeInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput"></a>

```go
func TimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBillingViewDataFilterExpressionTagsOutputReference <a name="BillingBillingViewDataFilterExpressionTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewDataFilterExpressionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBillingViewDataFilterExpressionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBillingViewDataFilterExpressionTimeRangeOutputReference <a name="BillingBillingViewDataFilterExpressionTimeRangeOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewDataFilterExpressionTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBillingViewDataFilterExpressionTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive">ResetBeginDateInclusive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive">ResetEndDateInclusive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBeginDateInclusive` <a name="ResetBeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive"></a>

```go
func ResetBeginDateInclusive()
```

##### `ResetEndDateInclusive` <a name="ResetEndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive"></a>

```go
func ResetEndDateInclusive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput">BeginDateInclusiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput">EndDateInclusiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive">BeginDateInclusive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive">EndDateInclusive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeginDateInclusiveInput`<sup>Optional</sup> <a name="BeginDateInclusiveInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput"></a>

```go
func BeginDateInclusiveInput() *string
```

- *Type:* *string

---

##### `EndDateInclusiveInput`<sup>Optional</sup> <a name="EndDateInclusiveInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput"></a>

```go
func EndDateInclusiveInput() *string
```

- *Type:* *string

---

##### `BeginDateInclusive`<sup>Required</sup> <a name="BeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive"></a>

```go
func BeginDateInclusive() *string
```

- *Type:* *string

---

##### `EndDateInclusive`<sup>Required</sup> <a name="EndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive"></a>

```go
func EndDateInclusive() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBillingViewTagsList <a name="BillingBillingViewTagsList" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingBillingViewTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get"></a>

```go
func Get(index *f64) BillingBillingViewTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBillingViewTagsOutputReference <a name="BillingBillingViewTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingbillingview"

billingbillingview.NewBillingBillingViewTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingBillingViewTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



