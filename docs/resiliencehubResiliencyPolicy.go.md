# `resiliencehubResiliencyPolicy` Submodule <a name="`resiliencehubResiliencyPolicy` Submodule" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubResiliencyPolicy <a name="ResiliencehubResiliencyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicy(scope Construct, id *string, config ResiliencehubResiliencyPolicyConfig) ResiliencehubResiliencyPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig">ResiliencehubResiliencyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig">ResiliencehubResiliencyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint">ResetDataLocationConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription">ResetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy"></a>

```go
func PutPolicy(value ResiliencehubResiliencyPolicyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `ResetDataLocationConstraint` <a name="ResetDataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint"></a>

```go
func ResetDataLocationConstraint()
```

##### `ResetPolicyDescription` <a name="ResetPolicyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription"></a>

```go
func ResetPolicyDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput">DataLocationConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput">PolicyDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint">DataLocationConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy"></a>

```go
func Policy() ResiliencehubResiliencyPolicyPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `DataLocationConstraintInput`<sup>Optional</sup> <a name="DataLocationConstraintInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput"></a>

```go
func DataLocationConstraintInput() *string
```

- *Type:* *string

---

##### `PolicyDescriptionInput`<sup>Optional</sup> <a name="PolicyDescriptionInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput"></a>

```go
func PolicyDescriptionInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `DataLocationConstraint`<sup>Required</sup> <a name="DataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```go
func DataLocationConstraint() *string
```

- *Type:* *string

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription"></a>

```go
func PolicyDescription() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubResiliencyPolicyConfig <a name="ResiliencehubResiliencyPolicyConfig" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Policy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy,
	PolicyName: *string,
	Tier: *string,
	DataLocationConstraint: *string,
	PolicyDescription: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName">PolicyName</a></code> | <code>*string</code> | Name of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier">Tier</a></code> | <code>*string</code> | Resiliency Policy Tier. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint">DataLocationConstraint</a></code> | <code>*string</code> | Data Location Constraint of the Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | Description of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy"></a>

```go
Policy ResiliencehubResiliencyPolicyPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Name of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Resiliency Policy Tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `DataLocationConstraint`<sup>Optional</sup> <a name="DataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint"></a>

```go
DataLocationConstraint *string
```

- *Type:* *string

Data Location Constraint of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `PolicyDescription`<sup>Optional</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription"></a>

```go
PolicyDescription *string
```

- *Type:* *string

Description of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

### ResiliencehubResiliencyPolicyPolicy <a name="ResiliencehubResiliencyPolicyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyPolicy {
	Az: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz,
	Hardware: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware,
	SoftwareAttribute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware,
	Region: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az">Az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware">Hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute">SoftwareAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region">Region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | Failure Policy. |

---

##### `Az`<sup>Required</sup> <a name="Az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az"></a>

```go
Az ResiliencehubResiliencyPolicyPolicyAz
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware"></a>

```go
Hardware ResiliencehubResiliencyPolicyPolicyHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

##### `SoftwareAttribute`<sup>Required</sup> <a name="SoftwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute"></a>

```go
SoftwareAttribute ResiliencehubResiliencyPolicyPolicySoftware
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region"></a>

```go
Region ResiliencehubResiliencyPolicyPolicyRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

### ResiliencehubResiliencyPolicyPolicyAz <a name="ResiliencehubResiliencyPolicyPolicyAz" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyPolicyAz {
	RpoInSecs: *f64,
	RtoInSecs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | RTO in seconds. |

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs"></a>

```go
RpoInSecs *f64
```

- *Type:* *f64

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs"></a>

```go
RtoInSecs *f64
```

- *Type:* *f64

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyHardware <a name="ResiliencehubResiliencyPolicyPolicyHardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyPolicyHardware {
	RpoInSecs: *f64,
	RtoInSecs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | RTO in seconds. |

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs"></a>

```go
RpoInSecs *f64
```

- *Type:* *f64

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs"></a>

```go
RtoInSecs *f64
```

- *Type:* *f64

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyRegion <a name="ResiliencehubResiliencyPolicyPolicyRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyPolicyRegion {
	RpoInSecs: *f64,
	RtoInSecs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | RTO in seconds. |

---

##### `RpoInSecs`<sup>Optional</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs"></a>

```go
RpoInSecs *f64
```

- *Type:* *f64

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `RtoInSecs`<sup>Optional</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs"></a>

```go
RtoInSecs *f64
```

- *Type:* *f64

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicySoftware <a name="ResiliencehubResiliencyPolicyPolicySoftware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

&resiliencehubresiliencypolicy.ResiliencehubResiliencyPolicyPolicySoftware {
	RpoInSecs: *f64,
	RtoInSecs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | RTO in seconds. |

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs"></a>

```go
RpoInSecs *f64
```

- *Type:* *f64

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs"></a>

```go
RtoInSecs *f64
```

- *Type:* *f64

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="ResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicyPolicyAzOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubResiliencyPolicyPolicyAzOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput">RpoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput">RtoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RpoInSecsInput`<sup>Optional</sup> <a name="RpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput"></a>

```go
func RpoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RtoInSecsInput`<sup>Optional</sup> <a name="RtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput"></a>

```go
func RtoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs"></a>

```go
func RpoInSecs() *f64
```

- *Type:* *f64

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs"></a>

```go
func RtoInSecs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicyPolicyHardwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubResiliencyPolicyPolicyHardwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput">RpoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput">RtoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RpoInSecsInput`<sup>Optional</sup> <a name="RpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput"></a>

```go
func RpoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RtoInSecsInput`<sup>Optional</sup> <a name="RtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput"></a>

```go
func RtoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs"></a>

```go
func RpoInSecs() *f64
```

- *Type:* *f64

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs"></a>

```go
func RtoInSecs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubResiliencyPolicyPolicyOutputReference <a name="ResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubResiliencyPolicyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz">PutAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware">PutHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion">PutRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute">PutSoftwareAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAz` <a name="PutAz" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz"></a>

```go
func PutAz(value ResiliencehubResiliencyPolicyPolicyAz)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `PutHardware` <a name="PutHardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware"></a>

```go
func PutHardware(value ResiliencehubResiliencyPolicyPolicyHardware)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `PutRegion` <a name="PutRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion"></a>

```go
func PutRegion(value ResiliencehubResiliencyPolicyPolicyRegion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `PutSoftwareAttribute` <a name="PutSoftwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute"></a>

```go
func PutSoftwareAttribute(value ResiliencehubResiliencyPolicyPolicySoftware)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az">Az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">Hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region">Region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">SoftwareAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput">AzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput">HardwareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput">RegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput">SoftwareAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Az`<sup>Required</sup> <a name="Az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```go
func Az() ResiliencehubResiliencyPolicyPolicyAzOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```go
func Hardware() ResiliencehubResiliencyPolicyPolicyHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```go
func Region() ResiliencehubResiliencyPolicyPolicyRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `SoftwareAttribute`<sup>Required</sup> <a name="SoftwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```go
func SoftwareAttribute() ResiliencehubResiliencyPolicyPolicySoftwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `AzInput`<sup>Optional</sup> <a name="AzInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput"></a>

```go
func AzInput() interface{}
```

- *Type:* interface{}

---

##### `HardwareInput`<sup>Optional</sup> <a name="HardwareInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput"></a>

```go
func HardwareInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput"></a>

```go
func RegionInput() interface{}
```

- *Type:* interface{}

---

##### `SoftwareAttributeInput`<sup>Optional</sup> <a name="SoftwareAttributeInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput"></a>

```go
func SoftwareAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="ResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicyPolicyRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubResiliencyPolicyPolicyRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs">ResetRpoInSecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs">ResetRtoInSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRpoInSecs` <a name="ResetRpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs"></a>

```go
func ResetRpoInSecs()
```

##### `ResetRtoInSecs` <a name="ResetRtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs"></a>

```go
func ResetRtoInSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput">RpoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput">RtoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RpoInSecsInput`<sup>Optional</sup> <a name="RpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput"></a>

```go
func RpoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RtoInSecsInput`<sup>Optional</sup> <a name="RtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput"></a>

```go
func RtoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs"></a>

```go
func RpoInSecs() *f64
```

- *Type:* *f64

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs"></a>

```go
func RtoInSecs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubresiliencypolicy"

resiliencehubresiliencypolicy.NewResiliencehubResiliencyPolicyPolicySoftwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubResiliencyPolicyPolicySoftwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput">RpoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput">RtoInSecsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs">RpoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs">RtoInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RpoInSecsInput`<sup>Optional</sup> <a name="RpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput"></a>

```go
func RpoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RtoInSecsInput`<sup>Optional</sup> <a name="RtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput"></a>

```go
func RtoInSecsInput() *f64
```

- *Type:* *f64

---

##### `RpoInSecs`<sup>Required</sup> <a name="RpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs"></a>

```go
func RpoInSecs() *f64
```

- *Type:* *f64

---

##### `RtoInSecs`<sup>Required</sup> <a name="RtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs"></a>

```go
func RtoInSecs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



