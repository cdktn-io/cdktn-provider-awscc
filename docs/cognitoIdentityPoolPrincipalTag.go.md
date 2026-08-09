# `cognitoIdentityPoolPrincipalTag` Submodule <a name="`cognitoIdentityPoolPrincipalTag` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolPrincipalTag <a name="CognitoIdentityPoolPrincipalTag" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

cognitoidentitypoolprincipaltag.NewCognitoIdentityPoolPrincipalTag(scope Construct, id *string, config CognitoIdentityPoolPrincipalTagConfig) CognitoIdentityPoolPrincipalTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig">CognitoIdentityPoolPrincipalTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults">ResetUseDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetPrincipalTags"></a>

```go
func ResetPrincipalTags()
```

##### `ResetUseDefaults` <a name="ResetUseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.resetUseDefaults"></a>

```go
func ResetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

cognitoidentitypoolprincipaltag.CognitoIdentityPoolPrincipalTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

cognitoidentitypoolprincipaltag.CognitoIdentityPoolPrincipalTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

cognitoidentitypoolprincipaltag.CognitoIdentityPoolPrincipalTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

cognitoidentitypoolprincipaltag.CognitoIdentityPoolPrincipalTag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoIdentityPoolPrincipalTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoIdentityPoolPrincipalTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolPrincipalTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput">IdentityProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput">UseDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName">IdentityProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags">PrincipalTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults">UseDefaults</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderNameInput`<sup>Optional</sup> <a name="IdentityProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderNameInput"></a>

```go
func IdentityProviderNameInput() *string
```

- *Type:* *string

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTagsInput"></a>

```go
func PrincipalTagsInput() *string
```

- *Type:* *string

---

##### `UseDefaultsInput`<sup>Optional</sup> <a name="UseDefaultsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaultsInput"></a>

```go
func UseDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.identityProviderName"></a>

```go
func IdentityProviderName() *string
```

- *Type:* *string

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.principalTags"></a>

```go
func PrincipalTags() *string
```

- *Type:* *string

---

##### `UseDefaults`<sup>Required</sup> <a name="UseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.useDefaults"></a>

```go
func UseDefaults() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolPrincipalTagConfig <a name="CognitoIdentityPoolPrincipalTagConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolprincipaltag"

&cognitoidentitypoolprincipaltag.CognitoIdentityPoolPrincipalTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityPoolId: *string,
	IdentityProviderName: *string,
	PrincipalTags: *string,
	UseDefaults: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName">IdentityProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags">PrincipalTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults">UseDefaults</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CognitoIdentityPoolPrincipalTag#identity_pool_id}.

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.identityProviderName"></a>

```go
IdentityProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CognitoIdentityPoolPrincipalTag#identity_provider_name}.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.principalTags"></a>

```go
PrincipalTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#principal_tags CognitoIdentityPoolPrincipalTag#principal_tags}.

---

##### `UseDefaults`<sup>Optional</sup> <a name="UseDefaults" id="@cdktn/provider-awscc.cognitoIdentityPoolPrincipalTag.CognitoIdentityPoolPrincipalTagConfig.property.useDefaults"></a>

```go
UseDefaults interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool_principal_tag#use_defaults CognitoIdentityPoolPrincipalTag#use_defaults}.

---



