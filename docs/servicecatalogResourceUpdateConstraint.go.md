# `servicecatalogResourceUpdateConstraint` Submodule <a name="`servicecatalogResourceUpdateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogResourceUpdateConstraint <a name="ServicecatalogResourceUpdateConstraint" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint awscc_servicecatalog_resource_update_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

servicecatalogresourceupdateconstraint.NewServicecatalogResourceUpdateConstraint(scope Construct, id *string, config ServicecatalogResourceUpdateConstraintConfig) ServicecatalogResourceUpdateConstraint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig">ServicecatalogResourceUpdateConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig">ServicecatalogResourceUpdateConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

servicecatalogresourceupdateconstraint.ServicecatalogResourceUpdateConstraint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

servicecatalogresourceupdateconstraint.ServicecatalogResourceUpdateConstraint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

servicecatalogresourceupdateconstraint.ServicecatalogResourceUpdateConstraint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

servicecatalogresourceupdateconstraint.ServicecatalogResourceUpdateConstraint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogResourceUpdateConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogResourceUpdateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogResourceUpdateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId">ResourceUpdateConstraintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput">TagUpdateOnProvisionedProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct">TagUpdateOnProvisionedProduct</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceUpdateConstraintId`<sup>Required</sup> <a name="ResourceUpdateConstraintId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId"></a>

```go
func ResourceUpdateConstraintId() *string
```

- *Type:* *string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput"></a>

```go
func PortfolioIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `TagUpdateOnProvisionedProductInput`<sup>Optional</sup> <a name="TagUpdateOnProvisionedProductInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput"></a>

```go
func TagUpdateOnProvisionedProductInput() *string
```

- *Type:* *string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `TagUpdateOnProvisionedProduct`<sup>Required</sup> <a name="TagUpdateOnProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct"></a>

```go
func TagUpdateOnProvisionedProduct() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogResourceUpdateConstraintConfig <a name="ServicecatalogResourceUpdateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogresourceupdateconstraint"

&servicecatalogresourceupdateconstraint.ServicecatalogResourceUpdateConstraintConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PortfolioId: *string,
	ProductId: *string,
	TagUpdateOnProvisionedProduct: *string,
	AcceptLanguage: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId">ProductId</a></code> | <code>*string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct">TagUpdateOnProvisionedProduct</a></code> | <code>*string</code> | ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description">Description</a></code> | <code>*string</code> | The description of the constraint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId"></a>

```go
PortfolioId *string
```

- *Type:* *string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#portfolio_id ServicecatalogResourceUpdateConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#product_id ServicecatalogResourceUpdateConstraint#product_id}

---

##### `TagUpdateOnProvisionedProduct`<sup>Required</sup> <a name="TagUpdateOnProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct"></a>

```go
TagUpdateOnProvisionedProduct *string
```

- *Type:* *string

ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#tag_update_on_provisioned_product ServicecatalogResourceUpdateConstraint#tag_update_on_provisioned_product}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#accept_language ServicecatalogResourceUpdateConstraint#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_resource_update_constraint#description ServicecatalogResourceUpdateConstraint#description}

---



