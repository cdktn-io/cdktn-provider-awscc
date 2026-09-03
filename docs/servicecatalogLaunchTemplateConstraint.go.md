# `servicecatalogLaunchTemplateConstraint` Submodule <a name="`servicecatalogLaunchTemplateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchTemplateConstraint <a name="ServicecatalogLaunchTemplateConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

servicecataloglaunchtemplateconstraint.NewServicecatalogLaunchTemplateConstraint(scope Construct, id *string, config ServicecatalogLaunchTemplateConstraintConfig) ServicecatalogLaunchTemplateConstraint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

servicecataloglaunchtemplateconstraint.ServicecatalogLaunchTemplateConstraint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

servicecataloglaunchtemplateconstraint.ServicecatalogLaunchTemplateConstraint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

servicecataloglaunchtemplateconstraint.ServicecatalogLaunchTemplateConstraint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

servicecataloglaunchtemplateconstraint.ServicecatalogLaunchTemplateConstraint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogLaunchTemplateConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogLaunchTemplateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchTemplateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId">LaunchTemplateConstraintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput">RulesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules">Rules</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LaunchTemplateConstraintId`<sup>Required</sup> <a name="LaunchTemplateConstraintId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId"></a>

```go
func LaunchTemplateConstraintId() *string
```

- *Type:* *string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput"></a>

```go
func PortfolioIdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput"></a>

```go
func RulesInput() *string
```

- *Type:* *string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules"></a>

```go
func Rules() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchTemplateConstraintConfig <a name="ServicecatalogLaunchTemplateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecataloglaunchtemplateconstraint"

&servicecataloglaunchtemplateconstraint.ServicecatalogLaunchTemplateConstraintConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PortfolioId: *string,
	ProductId: *string,
	Rules: *string,
	AcceptLanguage: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId">ProductId</a></code> | <code>*string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules">Rules</a></code> | <code>*string</code> | A json encoded string of the template constraint rules. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description">Description</a></code> | <code>*string</code> | The description of the constraint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId"></a>

```go
PortfolioId *string
```

- *Type:* *string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#portfolio_id ServicecatalogLaunchTemplateConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#product_id ServicecatalogLaunchTemplateConstraint#product_id}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules"></a>

```go
Rules *string
```

- *Type:* *string

A json encoded string of the template constraint rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#rules ServicecatalogLaunchTemplateConstraint#rules}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#accept_language ServicecatalogLaunchTemplateConstraint#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicecatalog_launch_template_constraint#description ServicecatalogLaunchTemplateConstraint#description}

---



