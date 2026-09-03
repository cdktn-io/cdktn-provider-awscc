# `ssmquicksetupLifecycleAutomation` Submodule <a name="`ssmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupLifecycleAutomation <a name="SsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

ssmquicksetuplifecycleautomation.NewSsmquicksetupLifecycleAutomation(scope Construct, id *string, config SsmquicksetupLifecycleAutomationConfig) SsmquicksetupLifecycleAutomation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

ssmquicksetuplifecycleautomation.SsmquicksetupLifecycleAutomation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

ssmquicksetuplifecycleautomation.SsmquicksetupLifecycleAutomation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

ssmquicksetuplifecycleautomation.SsmquicksetupLifecycleAutomation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

ssmquicksetuplifecycleautomation.SsmquicksetupLifecycleAutomation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmquicksetupLifecycleAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput">AutomationDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput">AutomationParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput">ResourceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument">AutomationDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters">AutomationParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey">ResourceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AutomationDocumentInput`<sup>Optional</sup> <a name="AutomationDocumentInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput"></a>

```go
func AutomationDocumentInput() *string
```

- *Type:* *string

---

##### `AutomationParametersInput`<sup>Optional</sup> <a name="AutomationParametersInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput"></a>

```go
func AutomationParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceKeyInput`<sup>Optional</sup> <a name="ResourceKeyInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput"></a>

```go
func ResourceKeyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutomationDocument`<sup>Required</sup> <a name="AutomationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```go
func AutomationDocument() *string
```

- *Type:* *string

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```go
func AutomationParameters() interface{}
```

- *Type:* interface{}

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```go
func ResourceKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupLifecycleAutomationConfig <a name="SsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmquicksetuplifecycleautomation"

&ssmquicksetuplifecycleautomation.SsmquicksetupLifecycleAutomationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationDocument: *string,
	AutomationParameters: interface{},
	ResourceKey: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument">AutomationDocument</a></code> | <code>*string</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters">AutomationParameters</a></code> | <code>interface{}</code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey">ResourceKey</a></code> | <code>*string</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationDocument`<sup>Required</sup> <a name="AutomationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument"></a>

```go
AutomationDocument *string
```

- *Type:* *string

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters"></a>

```go
AutomationParameters interface{}
```

- *Type:* interface{}

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey"></a>

```go
ResourceKey *string
```

- *Type:* *string

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---



