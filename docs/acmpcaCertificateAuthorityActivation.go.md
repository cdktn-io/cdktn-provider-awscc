# `acmpcaCertificateAuthorityActivation` Submodule <a name="`acmpcaCertificateAuthorityActivation` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthorityActivation <a name="AcmpcaCertificateAuthorityActivation" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation awscc_acmpca_certificate_authority_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

acmpcacertificateauthorityactivation.NewAcmpcaCertificateAuthorityActivation(scope Construct, id *string, config AcmpcaCertificateAuthorityActivationConfig) AcmpcaCertificateAuthorityActivation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig">AcmpcaCertificateAuthorityActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig">AcmpcaCertificateAuthorityActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain"></a>

```go
func ResetCertificateChain()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

acmpcacertificateauthorityactivation.AcmpcaCertificateAuthorityActivation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

acmpcacertificateauthorityactivation.AcmpcaCertificateAuthorityActivation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

acmpcacertificateauthorityactivation.AcmpcaCertificateAuthorityActivation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

acmpcacertificateauthorityactivation.AcmpcaCertificateAuthorityActivation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AcmpcaCertificateAuthorityActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AcmpcaCertificateAuthorityActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthorityActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain">CompleteCertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompleteCertificateChain`<sup>Required</sup> <a name="CompleteCertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain"></a>

```go
func CompleteCertificateChain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityActivationConfig <a name="AcmpcaCertificateAuthorityActivationConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthorityactivation"

&acmpcacertificateauthorityactivation.AcmpcaCertificateAuthorityActivationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	CertificateAuthorityArn: *string,
	CertificateChain: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Certificate Authority certificate that will be installed in the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | Arn of the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Certificate chain for the Certificate Authority certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status">Status</a></code> | <code>*string</code> | The status of the Certificate Authority. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Certificate Authority certificate that will be installed in the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate AcmpcaCertificateAuthorityActivation#certificate}

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

Arn of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate_authority_arn AcmpcaCertificateAuthorityActivation#certificate_authority_arn}

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Certificate chain for the Certificate Authority certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate_chain AcmpcaCertificateAuthorityActivation#certificate_chain}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#status AcmpcaCertificateAuthorityActivation#status}

---



