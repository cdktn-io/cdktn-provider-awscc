# `cognitoUserPoolSessionConfigurationAttachment` Submodule <a name="`cognitoUserPoolSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolSessionConfigurationAttachment <a name="CognitoUserPoolSessionConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.NewCognitoUserPoolSessionConfigurationAttachment(scope Construct, id *string, config CognitoUserPoolSessionConfigurationAttachmentConfig) CognitoUserPoolSessionConfigurationAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig">CognitoUserPoolSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig">CognitoUserPoolSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession">PutTokenSession</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTokenSession` <a name="PutTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession"></a>

```go
func PutTokenSession(value CognitoUserPoolSessionConfigurationAttachmentTokenSession)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.putTokenSession.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoUserPoolSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoUserPoolSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession">TokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput">TokenSessionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput">UserSessionTrackingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking">UserSessionTracking</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TokenSession`<sup>Required</sup> <a name="TokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSession"></a>

```go
func TokenSession() CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a>

---

##### `TokenSessionInput`<sup>Optional</sup> <a name="TokenSessionInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tokenSessionInput"></a>

```go
func TokenSessionInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `UserSessionTrackingInput`<sup>Optional</sup> <a name="UserSessionTrackingInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTrackingInput"></a>

```go
func UserSessionTrackingInput() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `UserSessionTracking`<sup>Required</sup> <a name="UserSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking"></a>

```go
func UserSessionTracking() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolSessionConfigurationAttachmentConfig <a name="CognitoUserPoolSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

&cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TokenSession: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession,
	UserPoolId: *string,
	UserSessionTracking: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession">TokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | Token session settings that apply to every app client in the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | The ID of the user pool. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking">UserSessionTracking</a></code> | <code>*string</code> | Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TokenSession`<sup>Required</sup> <a name="TokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.tokenSession"></a>

```go
TokenSession CognitoUserPoolSessionConfigurationAttachmentTokenSession
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession">CognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

Token session settings that apply to every app client in the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#token_session CognitoUserPoolSessionConfigurationAttachment#token_session}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

The ID of the user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_pool_id CognitoUserPoolSessionConfigurationAttachment#user_pool_id}

---

##### `UserSessionTracking`<sup>Required</sup> <a name="UserSessionTracking" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentConfig.property.userSessionTracking"></a>

```go
UserSessionTracking *string
```

- *Type:* *string

Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_session_tracking CognitoUserPoolSessionConfigurationAttachment#user_session_tracking}

---

### CognitoUserPoolSessionConfigurationAttachmentTokenSession <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSession" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

&cognitouserpoolsessionconfigurationattachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession {
	MaxPerUser: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser">MaxPerUser</a></code> | <code>*f64</code> | The maximum number of concurrent token sessions per user across all app clients. |

---

##### `MaxPerUser`<sup>Required</sup> <a name="MaxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSession.property.maxPerUser"></a>

```go
MaxPerUser *f64
```

- *Type:* *f64

The maximum number of concurrent token sessions per user across all app clients.

When a new session would exceed this number, the least recently used session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#max_per_user CognitoUserPoolSessionConfigurationAttachment#max_per_user}

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference <a name="CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cognitouserpoolsessionconfigurationattachment"

cognitouserpoolsessionconfigurationattachment.NewCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput">MaxPerUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser">MaxPerUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPerUserInput`<sup>Optional</sup> <a name="MaxPerUserInput" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUserInput"></a>

```go
func MaxPerUserInput() *f64
```

- *Type:* *f64

---

##### `MaxPerUser`<sup>Required</sup> <a name="MaxPerUser" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser"></a>

```go
func MaxPerUser() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolSessionConfigurationAttachment.CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



