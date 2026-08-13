# `cleanroomsPrivacyBudgetTemplate` Submodule <a name="`cleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsPrivacyBudgetTemplate <a name="CleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplate(scope Construct, id *string, config CleanroomsPrivacyBudgetTemplateConfig) CleanroomsPrivacyBudgetTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters"></a>

```go
func PutParameters(value CleanroomsPrivacyBudgetTemplateParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsPrivacyBudgetTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn">MembershipArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">PrivacyBudgetTemplateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput">PrivacyBudgetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">PrivacyBudgetType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```go
func MembershipArn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```go
func Parameters() CleanroomsPrivacyBudgetTemplateParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `PrivacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="PrivacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```go
func PrivacyBudgetTemplateIdentifier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags"></a>

```go
func Tags() CleanroomsPrivacyBudgetTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput"></a>

```go
func MembershipIdentifierInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `PrivacyBudgetTypeInput`<sup>Optional</sup> <a name="PrivacyBudgetTypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput"></a>

```go
func PrivacyBudgetTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `PrivacyBudgetType`<sup>Required</sup> <a name="PrivacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```go
func PrivacyBudgetType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsPrivacyBudgetTemplateConfig <a name="CleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

&cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoRefresh: *string,
	MembershipIdentifier: *string,
	Parameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters,
	PrivacyBudgetType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType">PrivacyBudgetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier"></a>

```go
MembershipIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters"></a>

```go
Parameters CleanroomsPrivacyBudgetTemplateParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `PrivacyBudgetType`<sup>Required</sup> <a name="PrivacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType"></a>

```go
PrivacyBudgetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

### CleanroomsPrivacyBudgetTemplateParameters <a name="CleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

&cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplateParameters {
	BudgetParameters: interface{},
	Epsilon: *f64,
	ResourceArn: *string,
	UsersNoisePerQuery: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters">BudgetParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon">Epsilon</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery">UsersNoisePerQuery</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}. |

---

##### `BudgetParameters`<sup>Optional</sup> <a name="BudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters"></a>

```go
BudgetParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

##### `Epsilon`<sup>Optional</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon"></a>

```go
Epsilon *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

##### `UsersNoisePerQuery`<sup>Optional</sup> <a name="UsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery"></a>

```go
UsersNoisePerQuery *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

### CleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

&cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters {
	AutoRefresh: *string,
	Budget: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget">Budget</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}. |

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh"></a>

```go
AutoRefresh *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `Budget`<sup>Optional</sup> <a name="Budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget"></a>

```go
Budget *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}.

---

### CleanroomsPrivacyBudgetTemplateTags <a name="CleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

&cleanroomsprivacybudgettemplate.CleanroomsPrivacyBudgetTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```go
func Get(index *f64) CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget">ResetBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh"></a>

```go
func ResetAutoRefresh()
```

##### `ResetBudget` <a name="ResetBudget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget"></a>

```go
func ResetBudget()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput">BudgetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">Budget</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput"></a>

```go
func AutoRefreshInput() *string
```

- *Type:* *string

---

##### `BudgetInput`<sup>Optional</sup> <a name="BudgetInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput"></a>

```go
func BudgetInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```go
func AutoRefresh() *string
```

- *Type:* *string

---

##### `Budget`<sup>Required</sup> <a name="Budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```go
func Budget() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplateParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsPrivacyBudgetTemplateParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters">PutBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters">ResetBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon">ResetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery">ResetUsersNoisePerQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBudgetParameters` <a name="PutBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters"></a>

```go
func PutBudgetParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBudgetParameters` <a name="ResetBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters"></a>

```go
func ResetBudgetParameters()
```

##### `ResetEpsilon` <a name="ResetEpsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon"></a>

```go
func ResetEpsilon()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```

##### `ResetUsersNoisePerQuery` <a name="ResetUsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery"></a>

```go
func ResetUsersNoisePerQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">BudgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput">BudgetParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput">EpsilonInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput">UsersNoisePerQueryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">Epsilon</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">UsersNoisePerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BudgetParameters`<sup>Required</sup> <a name="BudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```go
func BudgetParameters() CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `BudgetParametersInput`<sup>Optional</sup> <a name="BudgetParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput"></a>

```go
func BudgetParametersInput() interface{}
```

- *Type:* interface{}

---

##### `EpsilonInput`<sup>Optional</sup> <a name="EpsilonInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput"></a>

```go
func EpsilonInput() *f64
```

- *Type:* *f64

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `UsersNoisePerQueryInput`<sup>Optional</sup> <a name="UsersNoisePerQueryInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput"></a>

```go
func UsersNoisePerQueryInput() *f64
```

- *Type:* *f64

---

##### `Epsilon`<sup>Required</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```go
func Epsilon() *f64
```

- *Type:* *f64

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `UsersNoisePerQuery`<sup>Required</sup> <a name="UsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```go
func UsersNoisePerQuery() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsPrivacyBudgetTemplateTagsList <a name="CleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsPrivacyBudgetTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```go
func Get(index *f64) CleanroomsPrivacyBudgetTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="CleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsprivacybudgettemplate"

cleanroomsprivacybudgettemplate.NewCleanroomsPrivacyBudgetTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsPrivacyBudgetTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



