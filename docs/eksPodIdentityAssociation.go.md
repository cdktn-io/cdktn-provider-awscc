# `eksPodIdentityAssociation` Submodule <a name="`eksPodIdentityAssociation` Submodule" id="@cdktn/provider-awscc.eksPodIdentityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksPodIdentityAssociation <a name="EksPodIdentityAssociation" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association awscc_eks_pod_identity_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.NewEksPodIdentityAssociation(scope Construct, id *string, config EksPodIdentityAssociationConfig) EksPodIdentityAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig">EksPodIdentityAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig">EksPodIdentityAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags">ResetDisableSessionTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisableSessionTags` <a name="ResetDisableSessionTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetDisableSessionTags"></a>

```go
func ResetDisableSessionTags()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.resetTargetRoleArn"></a>

```go
func ResetTargetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EksPodIdentityAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.EksPodIdentityAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EksPodIdentityAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EksPodIdentityAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EksPodIdentityAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EksPodIdentityAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn">AssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList">EksPodIdentityAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput">DisableSessionTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags">DisableSessionTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationArn`<sup>Required</sup> <a name="AssociationArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationArn"></a>

```go
func AssociationArn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tags"></a>

```go
func Tags() EksPodIdentityAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList">EksPodIdentityAssociationTagsList</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DisableSessionTagsInput`<sup>Optional</sup> <a name="DisableSessionTagsInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTagsInput"></a>

```go
func DisableSessionTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArnInput"></a>

```go
func TargetRoleArnInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DisableSessionTags`<sup>Required</sup> <a name="DisableSessionTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.disableSessionTags"></a>

```go
func DisableSessionTags() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.targetRoleArn"></a>

```go
func TargetRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksPodIdentityAssociationConfig <a name="EksPodIdentityAssociationConfig" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

&ekspodidentityassociation.EksPodIdentityAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	Namespace: *string,
	RoleArn: *string,
	ServiceAccount: *string,
	DisableSessionTags: interface{},
	Policy: *string,
	Tags: interface{},
	TargetRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The cluster that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The Kubernetes namespace that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role ARN that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The Kubernetes service account that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags">DisableSessionTags</a></code> | <code>interface{}</code> | The Disable Session Tags of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.policy">Policy</a></code> | <code>*string</code> | The policy of the pod identity association. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | The Target Role Arn of the pod identity association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The cluster that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The Kubernetes namespace that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role ARN that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The Kubernetes service account that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}

---

##### `DisableSessionTags`<sup>Optional</sup> <a name="DisableSessionTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.disableSessionTags"></a>

```go
DisableSessionTags interface{}
```

- *Type:* interface{}

The Disable Session Tags of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The policy of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#policy EksPodIdentityAssociation#policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationConfig.property.targetRoleArn"></a>

```go
TargetRoleArn *string
```

- *Type:* *string

The Target Role Arn of the pod identity association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}

---

### EksPodIdentityAssociationTags <a name="EksPodIdentityAssociationTags" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

&ekspodidentityassociation.EksPodIdentityAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#key EksPodIdentityAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_pod_identity_association#value EksPodIdentityAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksPodIdentityAssociationTagsList <a name="EksPodIdentityAssociationTagsList" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.NewEksPodIdentityAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksPodIdentityAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get"></a>

```go
func Get(index *f64) EksPodIdentityAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksPodIdentityAssociationTagsOutputReference <a name="EksPodIdentityAssociationTagsOutputReference" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekspodidentityassociation"

ekspodidentityassociation.NewEksPodIdentityAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksPodIdentityAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksPodIdentityAssociation.EksPodIdentityAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



