# `apigatewayMethod` Submodule <a name="`apigatewayMethod` Submodule" id="@cdktn/provider-awscc.apigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayMethod <a name="ApigatewayMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethod(scope Construct, id *string, config ApigatewayMethodConfig) ApigatewayMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration">PutIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses">PutMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration">ResetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses">ResetMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId">ResetRequestValidatorId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntegration` <a name="PutIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration"></a>

```go
func PutIntegration(value ApigatewayMethodIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `PutMethodResponses` <a name="PutMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses"></a>

```go
func PutMethodResponses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired"></a>

```go
func ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes"></a>

```go
func ResetAuthorizationScopes()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration"></a>

```go
func ResetIntegration()
```

##### `ResetMethodResponses` <a name="ResetMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses"></a>

```go
func ResetMethodResponses()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName"></a>

```go
func ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels"></a>

```go
func ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters"></a>

```go
func ResetRequestParameters()
```

##### `ResetRequestValidatorId` <a name="ResetRequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId"></a>

```go
func ResetRequestValidatorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.ApigatewayMethod_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.ApigatewayMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.ApigatewayMethod_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.ApigatewayMethod_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses">MethodResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput">IntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput">MethodResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput">OperationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput">RequestModelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput">RequestParametersInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput">RequestValidatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels">RequestModels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters">RequestParameters</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId">RequestValidatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration"></a>

```go
func Integration() ApigatewayMethodIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a>

---

##### `MethodResponses`<sup>Required</sup> <a name="MethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses"></a>

```go
func MethodResponses() ApigatewayMethodMethodResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a>

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput"></a>

```go
func ApiKeyRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput"></a>

```go
func AuthorizationScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput"></a>

```go
func IntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `MethodResponsesInput`<sup>Optional</sup> <a name="MethodResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput"></a>

```go
func MethodResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput"></a>

```go
func OperationNameInput() *string
```

- *Type:* *string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput"></a>

```go
func RequestModelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput"></a>

```go
func RequestParametersInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RequestValidatorIdInput`<sup>Optional</sup> <a name="RequestValidatorIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput"></a>

```go
func RequestValidatorIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired"></a>

```go
func ApiKeyRequired() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes"></a>

```go
func AuthorizationScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels"></a>

```go
func RequestModels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters"></a>

```go
func RequestParameters() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RequestValidatorId`<sup>Required</sup> <a name="RequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId"></a>

```go
func RequestValidatorId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayMethodConfig <a name="ApigatewayMethodConfig" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

&apigatewaymethod.ApigatewayMethodConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HttpMethod: *string,
	ResourceId: *string,
	RestApiId: *string,
	ApiKeyRequired: interface{},
	AuthorizationScopes: *[]*string,
	AuthorizationType: *string,
	AuthorizerId: *string,
	Integration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayMethod.ApigatewayMethodIntegration,
	MethodResponses: interface{},
	OperationName: *string,
	RequestModels: *map[string]*string,
	RequestParameters: *map[string]interface{},
	RequestValidatorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses">MethodResponses</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName">OperationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels">RequestModels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters">RequestParameters</a></code> | <code>*map[string]interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId">RequestValidatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired"></a>

```go
ApiKeyRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes"></a>

```go
AuthorizationScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration"></a>

```go
Integration ApigatewayMethodIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `MethodResponses`<sup>Optional</sup> <a name="MethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses"></a>

```go
MethodResponses interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName"></a>

```go
OperationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels"></a>

```go
RequestModels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters"></a>

```go
RequestParameters *map[string]interface{}
```

- *Type:* *map[string]interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `RequestValidatorId`<sup>Optional</sup> <a name="RequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId"></a>

```go
RequestValidatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

### ApigatewayMethodIntegration <a name="ApigatewayMethodIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

&apigatewaymethod.ApigatewayMethodIntegration {
	CacheKeyParameters: *[]*string,
	CacheNamespace: *string,
	ConnectionId: *string,
	ConnectionType: *string,
	ContentHandling: *string,
	Credentials: *string,
	IntegrationHttpMethod: *string,
	IntegrationResponses: interface{},
	IntegrationTarget: *string,
	PassthroughBehavior: *string,
	RequestParameters: *map[string]*string,
	RequestTemplates: *map[string]*string,
	ResponseTransferMode: *string,
	TimeoutInMillis: *f64,
	Type: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace">CacheNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling">ContentHandling</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials">Credentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses">IntegrationResponses</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget">IntegrationTarget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters">RequestParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates">RequestTemplates</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode">ResponseTransferMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#type ApigatewayMethod#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}. |

---

##### `CacheKeyParameters`<sup>Optional</sup> <a name="CacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters"></a>

```go
CacheKeyParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

##### `CacheNamespace`<sup>Optional</sup> <a name="CacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace"></a>

```go
CacheNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling"></a>

```go
ContentHandling *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

##### `IntegrationHttpMethod`<sup>Optional</sup> <a name="IntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod"></a>

```go
IntegrationHttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

##### `IntegrationResponses`<sup>Optional</sup> <a name="IntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses"></a>

```go
IntegrationResponses interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

##### `IntegrationTarget`<sup>Optional</sup> <a name="IntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget"></a>

```go
IntegrationTarget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

##### `PassthroughBehavior`<sup>Optional</sup> <a name="PassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior"></a>

```go
PassthroughBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters"></a>

```go
RequestParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `RequestTemplates`<sup>Optional</sup> <a name="RequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates"></a>

```go
RequestTemplates *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

##### `ResponseTransferMode`<sup>Optional</sup> <a name="ResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode"></a>

```go
ResponseTransferMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis"></a>

```go
TimeoutInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

### ApigatewayMethodIntegrationIntegrationResponses <a name="ApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

&apigatewaymethod.ApigatewayMethodIntegrationIntegrationResponses {
	ContentHandling: *string,
	ResponseParameters: *map[string]*string,
	ResponseTemplates: *map[string]*string,
	SelectionPattern: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling">ContentHandling</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters">ResponseParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates">ResponseTemplates</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern">SelectionPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling"></a>

```go
ContentHandling *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters"></a>

```go
ResponseParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `ResponseTemplates`<sup>Optional</sup> <a name="ResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates"></a>

```go
ResponseTemplates *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}.

---

##### `SelectionPattern`<sup>Optional</sup> <a name="SelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern"></a>

```go
SelectionPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

### ApigatewayMethodMethodResponses <a name="ApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

&apigatewaymethod.ApigatewayMethodMethodResponses {
	ResponseModels: *map[string]*string,
	ResponseParameters: *map[string]interface{},
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels">ResponseModels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters">ResponseParameters</a></code> | <code>*map[string]interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `ResponseModels`<sup>Optional</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels"></a>

```go
ResponseModels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters"></a>

```go
ResponseParameters *map[string]interface{}
```

- *Type:* *map[string]interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayMethodIntegrationIntegrationResponsesList <a name="ApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethodIntegrationIntegrationResponsesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayMethodIntegrationIntegrationResponsesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```go
func Get(index *f64) ApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="ApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethodIntegrationIntegrationResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates">ResetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern">ResetSelectionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling"></a>

```go
func ResetContentHandling()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters"></a>

```go
func ResetResponseParameters()
```

##### `ResetResponseTemplates` <a name="ResetResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates"></a>

```go
func ResetResponseTemplates()
```

##### `ResetSelectionPattern` <a name="ResetSelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern"></a>

```go
func ResetSelectionPattern()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput">ResponseParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput">ResponseTemplatesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput">SelectionPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">ContentHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">ResponseParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">ResponseTemplates</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">SelectionPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput"></a>

```go
func ContentHandlingInput() *string
```

- *Type:* *string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput"></a>

```go
func ResponseParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseTemplatesInput`<sup>Optional</sup> <a name="ResponseTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput"></a>

```go
func ResponseTemplatesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SelectionPatternInput`<sup>Optional</sup> <a name="SelectionPatternInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput"></a>

```go
func SelectionPatternInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```go
func ContentHandling() *string
```

- *Type:* *string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```go
func ResponseParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```go
func ResponseTemplates() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SelectionPattern`<sup>Required</sup> <a name="SelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```go
func SelectionPattern() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayMethodIntegrationOutputReference <a name="ApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethodIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayMethodIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses">PutIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters">ResetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace">ResetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod">ResetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses">ResetIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget">ResetIntegrationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior">ResetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates">ResetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode">ResetResponseTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntegrationResponses` <a name="PutIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses"></a>

```go
func PutIntegrationResponses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCacheKeyParameters` <a name="ResetCacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters"></a>

```go
func ResetCacheKeyParameters()
```

##### `ResetCacheNamespace` <a name="ResetCacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace"></a>

```go
func ResetCacheNamespace()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType"></a>

```go
func ResetConnectionType()
```

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling"></a>

```go
func ResetContentHandling()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetIntegrationHttpMethod` <a name="ResetIntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod"></a>

```go
func ResetIntegrationHttpMethod()
```

##### `ResetIntegrationResponses` <a name="ResetIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses"></a>

```go
func ResetIntegrationResponses()
```

##### `ResetIntegrationTarget` <a name="ResetIntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget"></a>

```go
func ResetIntegrationTarget()
```

##### `ResetPassthroughBehavior` <a name="ResetPassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior"></a>

```go
func ResetPassthroughBehavior()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters"></a>

```go
func ResetRequestParameters()
```

##### `ResetRequestTemplates` <a name="ResetRequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates"></a>

```go
func ResetRequestTemplates()
```

##### `ResetResponseTransferMode` <a name="ResetResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode"></a>

```go
func ResetResponseTransferMode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis"></a>

```go
func ResetTimeoutInMillis()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses">IntegrationResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput">CacheKeyParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput">CacheNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput">IntegrationHttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput">IntegrationResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput">IntegrationTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput">PassthroughBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput">RequestParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput">RequestTemplatesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput">ResponseTransferModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace">CacheNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling">ContentHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget">IntegrationTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters">RequestParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates">RequestTemplates</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode">ResponseTransferMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntegrationResponses`<sup>Required</sup> <a name="IntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```go
func IntegrationResponses() ApigatewayMethodIntegrationIntegrationResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `CacheKeyParametersInput`<sup>Optional</sup> <a name="CacheKeyParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput"></a>

```go
func CacheKeyParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CacheNamespaceInput`<sup>Optional</sup> <a name="CacheNamespaceInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput"></a>

```go
func CacheNamespaceInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput"></a>

```go
func ContentHandlingInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `IntegrationHttpMethodInput`<sup>Optional</sup> <a name="IntegrationHttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput"></a>

```go
func IntegrationHttpMethodInput() *string
```

- *Type:* *string

---

##### `IntegrationResponsesInput`<sup>Optional</sup> <a name="IntegrationResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput"></a>

```go
func IntegrationResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationTargetInput`<sup>Optional</sup> <a name="IntegrationTargetInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput"></a>

```go
func IntegrationTargetInput() *string
```

- *Type:* *string

---

##### `PassthroughBehaviorInput`<sup>Optional</sup> <a name="PassthroughBehaviorInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput"></a>

```go
func PassthroughBehaviorInput() *string
```

- *Type:* *string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput"></a>

```go
func RequestParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTemplatesInput`<sup>Optional</sup> <a name="RequestTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput"></a>

```go
func RequestTemplatesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseTransferModeInput`<sup>Optional</sup> <a name="ResponseTransferModeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput"></a>

```go
func ResponseTransferModeInput() *string
```

- *Type:* *string

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput"></a>

```go
func TimeoutInMillisInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `CacheKeyParameters`<sup>Required</sup> <a name="CacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```go
func CacheKeyParameters() *[]*string
```

- *Type:* *[]*string

---

##### `CacheNamespace`<sup>Required</sup> <a name="CacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```go
func CacheNamespace() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```go
func ContentHandling() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `IntegrationHttpMethod`<sup>Required</sup> <a name="IntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```go
func IntegrationHttpMethod() *string
```

- *Type:* *string

---

##### `IntegrationTarget`<sup>Required</sup> <a name="IntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```go
func IntegrationTarget() *string
```

- *Type:* *string

---

##### `PassthroughBehavior`<sup>Required</sup> <a name="PassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```go
func PassthroughBehavior() *string
```

- *Type:* *string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```go
func RequestParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTemplates`<sup>Required</sup> <a name="RequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```go
func RequestTemplates() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseTransferMode`<sup>Required</sup> <a name="ResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```go
func ResponseTransferMode() *string
```

- *Type:* *string

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayMethodMethodResponsesList <a name="ApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethodMethodResponsesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayMethodMethodResponsesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get"></a>

```go
func Get(index *f64) ApigatewayMethodMethodResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayMethodMethodResponsesOutputReference <a name="ApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaymethod"

apigatewaymethod.NewApigatewayMethodMethodResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayMethodMethodResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels">ResetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseModels` <a name="ResetResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels"></a>

```go
func ResetResponseModels()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters"></a>

```go
func ResetResponseParameters()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput">ResponseModelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput">ResponseParametersInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels">ResponseModels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters">ResponseParameters</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseModelsInput`<sup>Optional</sup> <a name="ResponseModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput"></a>

```go
func ResponseModelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput"></a>

```go
func ResponseParametersInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ResponseModels`<sup>Required</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```go
func ResponseModels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```go
func ResponseParameters() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



