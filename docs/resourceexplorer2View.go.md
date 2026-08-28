# `resourceexplorer2View` Submodule <a name="`resourceexplorer2View` Submodule" id="@cdktn/provider-awscc.resourceexplorer2View"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resourceexplorer2View <a name="Resourceexplorer2View" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view awscc_resourceexplorer2_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2View(scope Construct, id *string, config Resourceexplorer2ViewConfig) Resourceexplorer2View
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putIncludedProperties">PutIncludedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperties">ResetIncludedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putFilters"></a>

```go
func PutFilters(value Resourceexplorer2ViewFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>

---

##### `PutIncludedProperties` <a name="PutIncludedProperties" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putIncludedProperties"></a>

```go
func PutIncludedProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.putIncludedProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetIncludedProperties` <a name="ResetIncludedProperties" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperties"></a>

```go
func ResetIncludedProperties()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resourceexplorer2View resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resourceexplorer2View resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resourceexplorer2View to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resourceexplorer2View that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resourceexplorer2View to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference">Resourceexplorer2ViewFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.includedProperties">IncludedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList">Resourceexplorer2ViewIncludedPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewArn">ViewArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.includedPropertiesInput">IncludedPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewNameInput">ViewNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewName">ViewName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.filters"></a>

```go
func Filters() Resourceexplorer2ViewFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference">Resourceexplorer2ViewFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludedProperties`<sup>Required</sup> <a name="IncludedProperties" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.includedProperties"></a>

```go
func IncludedProperties() Resourceexplorer2ViewIncludedPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList">Resourceexplorer2ViewIncludedPropertiesList</a>

---

##### `ViewArn`<sup>Required</sup> <a name="ViewArn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewArn"></a>

```go
func ViewArn() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `IncludedPropertiesInput`<sup>Optional</sup> <a name="IncludedPropertiesInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.includedPropertiesInput"></a>

```go
func IncludedPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ViewNameInput`<sup>Optional</sup> <a name="ViewNameInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewNameInput"></a>

```go
func ViewNameInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ViewName`<sup>Required</sup> <a name="ViewName" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.viewName"></a>

```go
func ViewName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resourceexplorer2ViewConfig <a name="Resourceexplorer2ViewConfig" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ViewName: *string,
	Filters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resourceexplorer2View.Resourceexplorer2ViewFilters,
	IncludedProperties: interface{},
	Scope: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.viewName">ViewName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#view_name Resourceexplorer2View#view_name}. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#filters Resourceexplorer2View#filters}. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperties">IncludedProperties</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#included_properties Resourceexplorer2View#included_properties}. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#scope Resourceexplorer2View#scope}. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ViewName`<sup>Required</sup> <a name="ViewName" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.viewName"></a>

```go
ViewName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#view_name Resourceexplorer2View#view_name}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters"></a>

```go
Filters Resourceexplorer2ViewFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters">Resourceexplorer2ViewFilters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#filters Resourceexplorer2View#filters}.

---

##### `IncludedProperties`<sup>Optional</sup> <a name="IncludedProperties" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperties"></a>

```go
IncludedProperties interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#included_properties Resourceexplorer2View#included_properties}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#scope Resourceexplorer2View#scope}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

### Resourceexplorer2ViewFilters <a name="Resourceexplorer2ViewFilters" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewFilters {
	FilterString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString">FilterString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}. |

---

##### `FilterString`<sup>Optional</sup> <a name="FilterString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString"></a>

```go
FilterString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}.

---

### Resourceexplorer2ViewIncludedProperties <a name="Resourceexplorer2ViewIncludedProperties" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewIncludedProperties {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedProperties.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resourceexplorer2ViewFiltersOutputReference <a name="Resourceexplorer2ViewFiltersOutputReference" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Resourceexplorer2ViewFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resetFilterString">ResetFilterString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterString` <a name="ResetFilterString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resetFilterString"></a>

```go
func ResetFilterString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput">FilterStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString">FilterString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterStringInput`<sup>Optional</sup> <a name="FilterStringInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput"></a>

```go
func FilterStringInput() *string
```

- *Type:* *string

---

##### `FilterString`<sup>Required</sup> <a name="FilterString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString"></a>

```go
func FilterString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resourceexplorer2ViewIncludedPropertiesList <a name="Resourceexplorer2ViewIncludedPropertiesList" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewIncludedPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resourceexplorer2ViewIncludedPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.get"></a>

```go
func Get(index *f64) Resourceexplorer2ViewIncludedPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resourceexplorer2ViewIncludedPropertiesOutputReference <a name="Resourceexplorer2ViewIncludedPropertiesOutputReference" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewIncludedPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resourceexplorer2ViewIncludedPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



