# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicy(scope Construct, id *string, config ImagebuilderLifecyclePolicyConfig) ImagebuilderLifecyclePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails">PutPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">PutResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDetails` <a name="PutPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails"></a>

```go
func PutPolicyDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceSelection` <a name="PutResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```go
func PutResourceSelection(value ImagebuilderLifecyclePolicyResourceSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails">PolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput">PolicyDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">ResourceSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails"></a>

```go
func PolicyDetails() ImagebuilderLifecyclePolicyPolicyDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```go
func ResourceSelection() ImagebuilderLifecyclePolicyResourceSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyDetailsInput`<sup>Optional</sup> <a name="PolicyDetailsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput"></a>

```go
func PolicyDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceSelectionInput`<sup>Optional</sup> <a name="ResourceSelectionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```go
func ResourceSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionRole: *string,
	Name: *string,
	PolicyDetails: interface{},
	ResourceSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection,
	ResourceType: *string,
	Description: *string,
	Status: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails">PolicyDetails</a></code> | <code>interface{}</code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">Status</a></code> | <code>*string</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags associated with the lifecycle policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails"></a>

```go
PolicyDetails interface{}
```

- *Type:* interface{}

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```go
ResourceSelection ImagebuilderLifecyclePolicyResourceSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

### ImagebuilderLifecyclePolicyPolicyDetails <a name="ImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetails {
	Action: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction,
	Filter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter,
	ExclusionRules: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | The action of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | The filters to apply of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules">ExclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | The exclusion rules to apply of the policy detail. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action"></a>

```go
Action ImagebuilderLifecyclePolicyPolicyDetailsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

The action of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter"></a>

```go
Filter ImagebuilderLifecyclePolicyPolicyDetailsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

The filters to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

##### `ExclusionRules`<sup>Optional</sup> <a name="ExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules"></a>

```go
ExclusionRules ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

The exclusion rules to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

### ImagebuilderLifecyclePolicyPolicyDetailsAction <a name="ImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction {
	Type: *string,
	IncludeResources: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type">Type</a></code> | <code>*string</code> | The action type of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources">IncludeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | The included resources of the policy detail. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `IncludeResources`<sup>Optional</sup> <a name="IncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources"></a>

```go
IncludeResources ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources {
	Amis: interface{},
	Containers: interface{},
	Snapshots: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis">Amis</a></code> | <code>interface{}</code> | Use to configure lifecycle actions on AMIs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers">Containers</a></code> | <code>interface{}</code> | Use to configure lifecycle actions on containers. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots">Snapshots</a></code> | <code>interface{}</code> | Use to configure lifecycle actions on snapshots. |

---

##### `Amis`<sup>Optional</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis"></a>

```go
Amis interface{}
```

- *Type:* interface{}

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

##### `Snapshots`<sup>Optional</sup> <a name="Snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots"></a>

```go
Snapshots interface{}
```

- *Type:* interface{}

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules {
	Amis: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis,
	TagMap: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis">Amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | The AMI exclusion rules for the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | The Image Builder tags to filter on. |

---

##### `Amis`<sup>Optional</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis"></a>

```go
Amis ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap"></a>

```go
TagMap *map[string]*string
```

- *Type:* *map[string]*string

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis {
	IsPublic: interface{},
	LastLaunched: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched,
	Regions: *[]*string,
	SharedAccounts: *[]*string,
	TagMap: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | Use to apply lifecycle policy actions on whether the AMI is public. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched">LastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | Use to apply lifecycle policy actions on AMIs launched before a certain time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions">Regions</a></code> | <code>*[]*string</code> | Use to apply lifecycle policy actions on AMIs distributed to a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts">SharedAccounts</a></code> | <code>*[]*string</code> | Use to apply lifecycle policy actions on AMIs shared with a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | The AMIs to select by tag. |

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic"></a>

```go
IsPublic interface{}
```

- *Type:* interface{}

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

##### `LastLaunched`<sup>Optional</sup> <a name="LastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched"></a>

```go
LastLaunched ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

##### `SharedAccounts`<sup>Optional</sup> <a name="SharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts"></a>

```go
SharedAccounts *[]*string
```

- *Type:* *[]*string

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap"></a>

```go
TagMap *map[string]*string
```

- *Type:* *map[string]*string

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched {
	Unit: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit">Unit</a></code> | <code>*string</code> | The value's time unit. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value">Value</a></code> | <code>*f64</code> | The last launched value. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

### ImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter {
	Type: *string,
	Value: *f64,
	RetainAtLeast: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type">Type</a></code> | <code>*string</code> | The filter type. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value">Value</a></code> | <code>*f64</code> | The filter value. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast">RetainAtLeast</a></code> | <code>*f64</code> | The minimum number of Image Builder resources to retain. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit">Unit</a></code> | <code>*string</code> | The value's time unit. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type"></a>

```go
Type *string
```

- *Type:* *string

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `RetainAtLeast`<sup>Optional</sup> <a name="RetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast"></a>

```go
RetainAtLeast *f64
```

- *Type:* *f64

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyResourceSelection {
	Recipes: interface{},
	TagMap: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes">Recipes</a></code> | <code>interface{}</code> | The recipes to select. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | The Image Builder resources to select by tag. |

---

##### `Recipes`<sup>Optional</sup> <a name="Recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes"></a>

```go
Recipes interface{}
```

- *Type:* interface{}

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```go
TagMap *map[string]*string
```

- *Type:* *map[string]*string

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

&imagebuilderlifecyclepolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes {
	Name: *string,
	SemanticVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name">Name</a></code> | <code>*string</code> | The recipe name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | The recipe version. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion"></a>

```go
SemanticVersion *string
```

- *Type:* *string

The recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis">ResetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots">ResetSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmis` <a name="ResetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis"></a>

```go
func ResetAmis()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetSnapshots` <a name="ResetSnapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots"></a>

```go
func ResetSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput">AmisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput">SnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">Amis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">Containers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">Snapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmisInput`<sup>Optional</sup> <a name="AmisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput"></a>

```go
func AmisInput() interface{}
```

- *Type:* interface{}

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotsInput`<sup>Optional</sup> <a name="SnapshotsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```go
func SnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```go
func Amis() interface{}
```

- *Type:* interface{}

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```go
func Containers() interface{}
```

- *Type:* interface{}

---

##### `Snapshots`<sup>Required</sup> <a name="Snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```go
func Snapshots() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources">PutIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources">ResetIncludeResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeResources` <a name="PutIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources"></a>

```go
func PutIncludeResources(value ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `ResetIncludeResources` <a name="ResetIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources"></a>

```go
func ResetIncludeResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">IncludeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput">IncludeResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeResources`<sup>Required</sup> <a name="IncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```go
func IncludeResources() ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `IncludeResourcesInput`<sup>Optional</sup> <a name="IncludeResourcesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput"></a>

```go
func IncludeResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched">PutLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched">ResetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts">ResetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLastLaunched` <a name="PutLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched"></a>

```go
func PutLastLaunched(value ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `ResetIsPublic` <a name="ResetIsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic"></a>

```go
func ResetIsPublic()
```

##### `ResetLastLaunched` <a name="ResetLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```go
func ResetLastLaunched()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetSharedAccounts` <a name="ResetSharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```go
func ResetSharedAccounts()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap"></a>

```go
func ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">LastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput">IsPublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput">LastLaunchedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput">SharedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">SharedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastLaunched`<sup>Required</sup> <a name="LastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```go
func LastLaunched() ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```go
func IsPublicInput() interface{}
```

- *Type:* interface{}

---

##### `LastLaunchedInput`<sup>Optional</sup> <a name="LastLaunchedInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```go
func LastLaunchedInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SharedAccountsInput`<sup>Optional</sup> <a name="SharedAccountsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```go
func SharedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```go
func TagMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```go
func IsPublic() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `SharedAccounts`<sup>Required</sup> <a name="SharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```go
func SharedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```go
func TagMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis">PutAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis">ResetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmis` <a name="PutAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis"></a>

```go
func PutAmis(value ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `ResetAmis` <a name="ResetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis"></a>

```go
func ResetAmis()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap"></a>

```go
func ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">Amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput">AmisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```go
func Amis() ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `AmisInput`<sup>Optional</sup> <a name="AmisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput"></a>

```go
func AmisInput() interface{}
```

- *Type:* interface{}

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput"></a>

```go
func TagMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```go
func TagMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast">ResetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetainAtLeast` <a name="ResetRetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast"></a>

```go
func ResetRetainAtLeast()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput">RetainAtLeastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">RetainAtLeast</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetainAtLeastInput`<sup>Optional</sup> <a name="RetainAtLeastInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput"></a>

```go
func RetainAtLeastInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `RetainAtLeast`<sup>Required</sup> <a name="RetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```go
func RetainAtLeast() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsList <a name="ImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderLifecyclePolicyPolicyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```go
func Get(index *f64) ImagebuilderLifecyclePolicyPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderLifecyclePolicyPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules">PutExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules">ResetExclusionRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```go
func PutAction(value ImagebuilderLifecyclePolicyPolicyDetailsAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `PutExclusionRules` <a name="PutExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules"></a>

```go
func PutExclusionRules(value ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter"></a>

```go
func PutFilter(value ImagebuilderLifecyclePolicyPolicyDetailsFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `ResetExclusionRules` <a name="ResetExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules"></a>

```go
func ResetExclusionRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">ExclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput">ExclusionRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```go
func Action() ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `ExclusionRules`<sup>Required</sup> <a name="ExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```go
func ExclusionRules() ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```go
func Filter() ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionRulesInput`<sup>Optional</sup> <a name="ExclusionRulesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput"></a>

```go
func ExclusionRulesInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyResourceSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderLifecyclePolicyResourceSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes">PutRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes">ResetRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecipes` <a name="PutRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes"></a>

```go
func PutRecipes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecipes` <a name="ResetRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes"></a>

```go
func ResetRecipes()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```go
func ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">Recipes</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput">RecipesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">TagMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Recipes`<sup>Required</sup> <a name="Recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```go
func Recipes() ImagebuilderLifecyclePolicyResourceSelectionRecipesList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `RecipesInput`<sup>Optional</sup> <a name="RecipesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput"></a>

```go
func RecipesInput() interface{}
```

- *Type:* interface{}

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```go
func TagMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```go
func TagMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyResourceSelectionRecipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImagebuilderLifecyclePolicyResourceSelectionRecipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```go
func Get(index *f64) ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderlifecyclepolicy"

imagebuilderlifecyclepolicy.NewImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion"></a>

```go
func ResetSemanticVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput"></a>

```go
func SemanticVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```go
func SemanticVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



