# `finspaceEnvironment` Submodule <a name="`finspaceEnvironment` Submodule" id="@cdktn/provider-awscc.finspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceEnvironment <a name="FinspaceEnvironment" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironment(scope Construct, id *string, config FinspaceEnvironmentConfig) FinspaceEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters">PutFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters">PutSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles">ResetDataBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode">ResetFederationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters">ResetFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters">ResetSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFederationParameters` <a name="PutFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters"></a>

```go
func PutFederationParameters(value FinspaceEnvironmentFederationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `PutSuperuserParameters` <a name="PutSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters"></a>

```go
func PutSuperuserParameters(value FinspaceEnvironmentSuperuserParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataBundles` <a name="ResetDataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles"></a>

```go
func ResetDataBundles()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFederationMode` <a name="ResetFederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode"></a>

```go
func ResetFederationMode()
```

##### `ResetFederationParameters` <a name="ResetFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters"></a>

```go
func ResetFederationParameters()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSuperuserParameters` <a name="ResetSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters"></a>

```go
func ResetSuperuserParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.FinspaceEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.FinspaceEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.FinspaceEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.FinspaceEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FinspaceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId">DedicatedServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl">EnvironmentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl">SageMakerStudioDomainUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput">DataBundlesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput">FederationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput">FederationParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput">SuperuserParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles">DataBundles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode">FederationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DedicatedServiceAccountId`<sup>Required</sup> <a name="DedicatedServiceAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```go
func DedicatedServiceAccountId() *string
```

- *Type:* *string

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn"></a>

```go
func EnvironmentArn() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `EnvironmentUrl`<sup>Required</sup> <a name="EnvironmentUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl"></a>

```go
func EnvironmentUrl() *string
```

- *Type:* *string

---

##### `FederationParameters`<sup>Required</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters"></a>

```go
func FederationParameters() FinspaceEnvironmentFederationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SageMakerStudioDomainUrl`<sup>Required</sup> <a name="SageMakerStudioDomainUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```go
func SageMakerStudioDomainUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SuperuserParameters`<sup>Required</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters"></a>

```go
func SuperuserParameters() FinspaceEnvironmentSuperuserParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags"></a>

```go
func Tags() FinspaceEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a>

---

##### `DataBundlesInput`<sup>Optional</sup> <a name="DataBundlesInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput"></a>

```go
func DataBundlesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FederationModeInput`<sup>Optional</sup> <a name="FederationModeInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput"></a>

```go
func FederationModeInput() *string
```

- *Type:* *string

---

##### `FederationParametersInput`<sup>Optional</sup> <a name="FederationParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput"></a>

```go
func FederationParametersInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SuperuserParametersInput`<sup>Optional</sup> <a name="SuperuserParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput"></a>

```go
func SuperuserParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataBundles`<sup>Required</sup> <a name="DataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles"></a>

```go
func DataBundles() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FederationMode`<sup>Required</sup> <a name="FederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode"></a>

```go
func FederationMode() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentConfig <a name="FinspaceEnvironmentConfig" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

&finspaceenvironment.FinspaceEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DataBundles: *[]*string,
	Description: *string,
	FederationMode: *string,
	FederationParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters,
	KmsKeyId: *string,
	SuperuserParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles">DataBundles</a></code> | <code>*[]*string</code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode">FederationMode</a></code> | <code>*string</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `DataBundles`<sup>Optional</sup> <a name="DataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles"></a>

```go
DataBundles *[]*string
```

- *Type:* *[]*string

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `FederationMode`<sup>Optional</sup> <a name="FederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode"></a>

```go
FederationMode *string
```

- *Type:* *string

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `FederationParameters`<sup>Optional</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters"></a>

```go
FederationParameters FinspaceEnvironmentFederationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `SuperuserParameters`<sup>Optional</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters"></a>

```go
SuperuserParameters FinspaceEnvironmentSuperuserParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

### FinspaceEnvironmentFederationParameters <a name="FinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

&finspaceenvironment.FinspaceEnvironmentFederationParameters {
	ApplicationCallBackUrl: *string,
	AttributeMap: interface{},
	FederationProviderName: *string,
	FederationUrn: *string,
	SamlMetadataDocument: *string,
	SamlMetadataUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>*string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap">AttributeMap</a></code> | <code>interface{}</code> | Attribute map for SAML configuration. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName">FederationProviderName</a></code> | <code>*string</code> | Federation provider name to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn">FederationUrn</a></code> | <code>*string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>*string</code> | SAML metadata document to link the federation provider to the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>*string</code> | SAML metadata URL to link with the Environment. |

---

##### `ApplicationCallBackUrl`<sup>Optional</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl"></a>

```go
ApplicationCallBackUrl *string
```

- *Type:* *string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

##### `AttributeMap`<sup>Optional</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap"></a>

```go
AttributeMap interface{}
```

- *Type:* interface{}

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

##### `FederationProviderName`<sup>Optional</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName"></a>

```go
FederationProviderName *string
```

- *Type:* *string

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

##### `FederationUrn`<sup>Optional</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn"></a>

```go
FederationUrn *string
```

- *Type:* *string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

##### `SamlMetadataDocument`<sup>Optional</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument"></a>

```go
SamlMetadataDocument *string
```

- *Type:* *string

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

##### `SamlMetadataUrl`<sup>Optional</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl"></a>

```go
SamlMetadataUrl *string
```

- *Type:* *string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

### FinspaceEnvironmentFederationParametersAttributeMap <a name="FinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

&finspaceenvironment.FinspaceEnvironmentFederationParametersAttributeMap {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

### FinspaceEnvironmentSuperuserParameters <a name="FinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

&finspaceenvironment.FinspaceEnvironmentSuperuserParameters {
	EmailAddress: *string,
	FirstName: *string,
	LastName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Email address. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName">FirstName</a></code> | <code>*string</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName">LastName</a></code> | <code>*string</code> | Last name. |

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

### FinspaceEnvironmentTags <a name="FinspaceEnvironmentTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

&finspaceenvironment.FinspaceEnvironmentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceEnvironmentFederationParametersAttributeMapList <a name="FinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentFederationParametersAttributeMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceEnvironmentFederationParametersAttributeMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```go
func Get(index *f64) FinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="FinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentFederationParametersAttributeMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceEnvironmentFederationParametersOutputReference <a name="FinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentFederationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceEnvironmentFederationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap">PutAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl">ResetApplicationCallBackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap">ResetAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName">ResetFederationProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn">ResetFederationUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument">ResetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl">ResetSamlMetadataUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeMap` <a name="PutAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap"></a>

```go
func PutAttributeMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationCallBackUrl` <a name="ResetApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl"></a>

```go
func ResetApplicationCallBackUrl()
```

##### `ResetAttributeMap` <a name="ResetAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap"></a>

```go
func ResetAttributeMap()
```

##### `ResetFederationProviderName` <a name="ResetFederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName"></a>

```go
func ResetFederationProviderName()
```

##### `ResetFederationUrn` <a name="ResetFederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn"></a>

```go
func ResetFederationUrn()
```

##### `ResetSamlMetadataDocument` <a name="ResetSamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument"></a>

```go
func ResetSamlMetadataDocument()
```

##### `ResetSamlMetadataUrl` <a name="ResetSamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl"></a>

```go
func ResetSamlMetadataUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">AttributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput">ApplicationCallBackUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput">AttributeMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput">FederationProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput">FederationUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput">SamlMetadataDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput">SamlMetadataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">FederationProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">FederationUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeMap`<sup>Required</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```go
func AttributeMap() FinspaceEnvironmentFederationParametersAttributeMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `ApplicationCallBackUrlInput`<sup>Optional</sup> <a name="ApplicationCallBackUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput"></a>

```go
func ApplicationCallBackUrlInput() *string
```

- *Type:* *string

---

##### `AttributeMapInput`<sup>Optional</sup> <a name="AttributeMapInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput"></a>

```go
func AttributeMapInput() interface{}
```

- *Type:* interface{}

---

##### `FederationProviderNameInput`<sup>Optional</sup> <a name="FederationProviderNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput"></a>

```go
func FederationProviderNameInput() *string
```

- *Type:* *string

---

##### `FederationUrnInput`<sup>Optional</sup> <a name="FederationUrnInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput"></a>

```go
func FederationUrnInput() *string
```

- *Type:* *string

---

##### `SamlMetadataDocumentInput`<sup>Optional</sup> <a name="SamlMetadataDocumentInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput"></a>

```go
func SamlMetadataDocumentInput() *string
```

- *Type:* *string

---

##### `SamlMetadataUrlInput`<sup>Optional</sup> <a name="SamlMetadataUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput"></a>

```go
func SamlMetadataUrlInput() *string
```

- *Type:* *string

---

##### `ApplicationCallBackUrl`<sup>Required</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```go
func ApplicationCallBackUrl() *string
```

- *Type:* *string

---

##### `FederationProviderName`<sup>Required</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```go
func FederationProviderName() *string
```

- *Type:* *string

---

##### `FederationUrn`<sup>Required</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```go
func FederationUrn() *string
```

- *Type:* *string

---

##### `SamlMetadataDocument`<sup>Required</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```go
func SamlMetadataDocument() *string
```

- *Type:* *string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```go
func SamlMetadataUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceEnvironmentSuperuserParametersOutputReference <a name="FinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentSuperuserParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceEnvironmentSuperuserParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName"></a>

```go
func ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceEnvironmentTagsList <a name="FinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceEnvironmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get"></a>

```go
func Get(index *f64) FinspaceEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceEnvironmentTagsOutputReference <a name="FinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/finspaceenvironment"

finspaceenvironment.NewFinspaceEnvironmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceEnvironmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



