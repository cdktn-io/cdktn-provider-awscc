# `cognitoIdentityPoolRoleAttachment` Submodule <a name="`cognitoIdentityPoolRoleAttachment` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolRoleAttachment <a name="CognitoIdentityPoolRoleAttachment" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachment(scope Construct, id *string, config CognitoIdentityPoolRoleAttachmentConfig) CognitoIdentityPoolRoleAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig">CognitoIdentityPoolRoleAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig">CognitoIdentityPoolRoleAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings">PutRoleMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings">ResetRoleMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles">ResetRoles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoleMappings` <a name="PutRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings"></a>

```go
func PutRoleMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRoleMappings` <a name="ResetRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings"></a>

```go
func ResetRoleMappings()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles"></a>

```go
func ResetRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoIdentityPoolRoleAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoIdentityPoolRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId">IdentityPoolRoleAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings">RoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput">RoleMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput">RolesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles">Roles</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityPoolRoleAttachmentId`<sup>Required</sup> <a name="IdentityPoolRoleAttachmentId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId"></a>

```go
func IdentityPoolRoleAttachmentId() *string
```

- *Type:* *string

---

##### `RoleMappings`<sup>Required</sup> <a name="RoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings"></a>

```go
func RoleMappings() CognitoIdentityPoolRoleAttachmentRoleMappingsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a>

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `RoleMappingsInput`<sup>Optional</sup> <a name="RoleMappingsInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput"></a>

```go
func RoleMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput"></a>

```go
func RolesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles"></a>

```go
func Roles() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolRoleAttachmentConfig <a name="CognitoIdentityPoolRoleAttachmentConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

&cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityPoolId: *string,
	RoleMappings: interface{},
	Roles: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings">RoleMappings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles">Roles</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}.

---

##### `RoleMappings`<sup>Optional</sup> <a name="RoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings"></a>

```go
RoleMappings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles"></a>

```go
Roles *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappings <a name="CognitoIdentityPoolRoleAttachmentRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

&cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachmentRoleMappings {
	AmbiguousRoleResolution: *string,
	IdentityProvider: *string,
	RulesConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution">AmbiguousRoleResolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration">RulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}. |

---

##### `AmbiguousRoleResolution`<sup>Optional</sup> <a name="AmbiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution"></a>

```go
AmbiguousRoleResolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider"></a>

```go
IdentityProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}.

---

##### `RulesConfiguration`<sup>Optional</sup> <a name="RulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration"></a>

```go
RulesConfiguration CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

&cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules">Rules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

&cognitoidentitypoolroleattachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules {
	Claim: *string,
	MatchType: *string,
	RoleArn: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim">Claim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType">MatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}. |

---

##### `Claim`<sup>Optional</sup> <a name="Claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim"></a>

```go
Claim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}.

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolRoleAttachmentRoleMappingsMap <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsMap" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachmentRoleMappingsMap(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoIdentityPoolRoleAttachmentRoleMappingsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get"></a>

```go
func Get(key *string) CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration">PutRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution">ResetAmbiguousRoleResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration">ResetRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRulesConfiguration` <a name="PutRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration"></a>

```go
func PutRulesConfiguration(value CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---

##### `ResetAmbiguousRoleResolution` <a name="ResetAmbiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution"></a>

```go
func ResetAmbiguousRoleResolution()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider"></a>

```go
func ResetIdentityProvider()
```

##### `ResetRulesConfiguration` <a name="ResetRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration"></a>

```go
func ResetRulesConfiguration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration">RulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput">AmbiguousRoleResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput">IdentityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput">RulesConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution">AmbiguousRoleResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RulesConfiguration`<sup>Required</sup> <a name="RulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration"></a>

```go
func RulesConfiguration() CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a>

---

##### `AmbiguousRoleResolutionInput`<sup>Optional</sup> <a name="AmbiguousRoleResolutionInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput"></a>

```go
func AmbiguousRoleResolutionInput() *string
```

- *Type:* *string

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput"></a>

```go
func IdentityProviderInput() *string
```

- *Type:* *string

---

##### `RulesConfigurationInput`<sup>Optional</sup> <a name="RulesConfigurationInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput"></a>

```go
func RulesConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AmbiguousRoleResolution`<sup>Required</sup> <a name="AmbiguousRoleResolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution"></a>

```go
func AmbiguousRoleResolution() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider"></a>

```go
func IdentityProvider() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules"></a>

```go
func Rules() CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get"></a>

```go
func Get(index *f64) CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitoidentitypoolroleattachment"

cognitoidentitypoolroleattachment.NewCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim">ResetClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClaim` <a name="ResetClaim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim"></a>

```go
func ResetClaim()
```

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType"></a>

```go
func ResetMatchType()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput">ClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim">Claim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimInput`<sup>Optional</sup> <a name="ClaimInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput"></a>

```go
func ClaimInput() *string
```

- *Type:* *string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim"></a>

```go
func Claim() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



