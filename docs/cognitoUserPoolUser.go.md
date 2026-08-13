# `cognitoUserPoolUser` Submodule <a name="`cognitoUserPoolUser` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUser <a name="CognitoUserPoolUser" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user awscc_cognito_user_pool_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.NewCognitoUserPoolUser(scope Construct, id *string, config CognitoUserPoolUserConfig) CognitoUserPoolUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig">CognitoUserPoolUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig">CognitoUserPoolUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes">PutUserAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData">PutValidationData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata">ResetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums">ResetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation">ResetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction">ResetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes">ResetUserAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData">ResetValidationData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserAttributes` <a name="PutUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes"></a>

```go
func PutUserAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValidationData` <a name="PutValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData"></a>

```go
func PutValidationData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientMetadata` <a name="ResetClientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata"></a>

```go
func ResetClientMetadata()
```

##### `ResetDesiredDeliveryMediums` <a name="ResetDesiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums"></a>

```go
func ResetDesiredDeliveryMediums()
```

##### `ResetForceAliasCreation` <a name="ResetForceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation"></a>

```go
func ResetForceAliasCreation()
```

##### `ResetMessageAction` <a name="ResetMessageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction"></a>

```go
func ResetMessageAction()
```

##### `ResetUserAttributes` <a name="ResetUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes"></a>

```go
func ResetUserAttributes()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetValidationData` <a name="ResetValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData"></a>

```go
func ResetValidationData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.CognitoUserPoolUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.CognitoUserPoolUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.CognitoUserPoolUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.CognitoUserPoolUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoUserPoolUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoUserPoolUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes">UserAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData">ValidationData</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput">ClientMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput">DesiredDeliveryMediumsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput">ForceAliasCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput">MessageActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput">UserAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput">ValidationDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata">ClientMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction">MessageAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes"></a>

```go
func UserAttributes() CognitoUserPoolUserUserAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a>

---

##### `ValidationData`<sup>Required</sup> <a name="ValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData"></a>

```go
func ValidationData() CognitoUserPoolUserValidationDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a>

---

##### `ClientMetadataInput`<sup>Optional</sup> <a name="ClientMetadataInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput"></a>

```go
func ClientMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DesiredDeliveryMediumsInput`<sup>Optional</sup> <a name="DesiredDeliveryMediumsInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput"></a>

```go
func DesiredDeliveryMediumsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ForceAliasCreationInput`<sup>Optional</sup> <a name="ForceAliasCreationInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput"></a>

```go
func ForceAliasCreationInput() interface{}
```

- *Type:* interface{}

---

##### `MessageActionInput`<sup>Optional</sup> <a name="MessageActionInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput"></a>

```go
func MessageActionInput() *string
```

- *Type:* *string

---

##### `UserAttributesInput`<sup>Optional</sup> <a name="UserAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput"></a>

```go
func UserAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `ValidationDataInput`<sup>Optional</sup> <a name="ValidationDataInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput"></a>

```go
func ValidationDataInput() interface{}
```

- *Type:* interface{}

---

##### `ClientMetadata`<sup>Required</sup> <a name="ClientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata"></a>

```go
func ClientMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DesiredDeliveryMediums`<sup>Required</sup> <a name="DesiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums"></a>

```go
func DesiredDeliveryMediums() *[]*string
```

- *Type:* *[]*string

---

##### `ForceAliasCreation`<sup>Required</sup> <a name="ForceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation"></a>

```go
func ForceAliasCreation() interface{}
```

- *Type:* interface{}

---

##### `MessageAction`<sup>Required</sup> <a name="MessageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction"></a>

```go
func MessageAction() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUserConfig <a name="CognitoUserPoolUserConfig" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

&cognitouserpooluser.CognitoUserPoolUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	ClientMetadata: *map[string]*string,
	DesiredDeliveryMediums: *[]*string,
	ForceAliasCreation: interface{},
	MessageAction: *string,
	UserAttributes: interface{},
	Username: *string,
	ValidationData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata">ClientMetadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction">MessageAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes">UserAttributes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData">ValidationData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}.

---

##### `ClientMetadata`<sup>Optional</sup> <a name="ClientMetadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata"></a>

```go
ClientMetadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}.

---

##### `DesiredDeliveryMediums`<sup>Optional</sup> <a name="DesiredDeliveryMediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums"></a>

```go
DesiredDeliveryMediums *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}.

---

##### `ForceAliasCreation`<sup>Optional</sup> <a name="ForceAliasCreation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation"></a>

```go
ForceAliasCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}.

---

##### `MessageAction`<sup>Optional</sup> <a name="MessageAction" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction"></a>

```go
MessageAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}.

---

##### `UserAttributes`<sup>Optional</sup> <a name="UserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes"></a>

```go
UserAttributes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}.

---

##### `ValidationData`<sup>Optional</sup> <a name="ValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData"></a>

```go
ValidationData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}.

---

### CognitoUserPoolUserUserAttributes <a name="CognitoUserPoolUserUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

&cognitouserpooluser.CognitoUserPoolUserUserAttributes {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

### CognitoUserPoolUserValidationData <a name="CognitoUserPoolUserValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

&cognitouserpooluser.CognitoUserPoolUserValidationData {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolUserUserAttributesList <a name="CognitoUserPoolUserUserAttributesList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.NewCognitoUserPoolUserUserAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoUserPoolUserUserAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get"></a>

```go
func Get(index *f64) CognitoUserPoolUserUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolUserUserAttributesOutputReference <a name="CognitoUserPoolUserUserAttributesOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.NewCognitoUserPoolUserUserAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoUserPoolUserUserAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolUserValidationDataList <a name="CognitoUserPoolUserValidationDataList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.NewCognitoUserPoolUserValidationDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoUserPoolUserValidationDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get"></a>

```go
func Get(index *f64) CognitoUserPoolUserValidationDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolUserValidationDataOutputReference <a name="CognitoUserPoolUserValidationDataOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitouserpooluser"

cognitouserpooluser.NewCognitoUserPoolUserValidationDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoUserPoolUserValidationDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



