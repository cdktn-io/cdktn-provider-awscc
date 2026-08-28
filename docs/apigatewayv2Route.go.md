# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktn/provider-awscc.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route awscc_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

apigatewayv2route.NewApigatewayv2Route(scope Construct, id *string, config Apigatewayv2RouteConfig) Apigatewayv2Route
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">ResetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">ResetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```go
func ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```go
func ResetAuthorizationScopes()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetModelSelectionExpression` <a name="ResetModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```go
func ResetModelSelectionExpression()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```go
func ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```go
func ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters"></a>

```go
func ResetRequestParameters()
```

##### `ResetRouteResponseSelectionExpression` <a name="ResetRouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```go
func ResetRouteResponseSelectionExpression()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```go
func ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

apigatewayv2route.Apigatewayv2Route_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

apigatewayv2route.Apigatewayv2Route_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

apigatewayv2route.Apigatewayv2Route_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

apigatewayv2route.Apigatewayv2Route_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2Route to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId">RouteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">ModelSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">OperationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">RequestModelsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput">RequestParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">RouteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">RouteResponseSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels">RequestModels</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters">RequestParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey">RouteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId"></a>

```go
func RouteId() *string
```

- *Type:* *string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```go
func ApiKeyRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```go
func AuthorizationScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `ModelSelectionExpressionInput`<sup>Optional</sup> <a name="ModelSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```go
func ModelSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```go
func OperationNameInput() *string
```

- *Type:* *string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```go
func RequestModelsInput() *string
```

- *Type:* *string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput"></a>

```go
func RequestParametersInput() *string
```

- *Type:* *string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```go
func RouteKeyInput() *string
```

- *Type:* *string

---

##### `RouteResponseSelectionExpressionInput`<sup>Optional</sup> <a name="RouteResponseSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```go
func RouteResponseSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```go
func ApiKeyRequired() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```go
func AuthorizationScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```go
func ModelSelectionExpression() *string
```

- *Type:* *string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```go
func RequestModels() *string
```

- *Type:* *string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters"></a>

```go
func RequestParameters() *string
```

- *Type:* *string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```go
func RouteKey() *string
```

- *Type:* *string

---

##### `RouteResponseSelectionExpression`<sup>Required</sup> <a name="RouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```go
func RouteResponseSelectionExpression() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2route"

&apigatewayv2route.Apigatewayv2RouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	RouteKey: *string,
	ApiKeyRequired: interface{},
	AuthorizationScopes: *[]*string,
	AuthorizationType: *string,
	AuthorizerId: *string,
	ModelSelectionExpression: *string,
	OperationName: *string,
	RequestModels: *string,
	RequestParameters: *string,
	RouteResponseSelectionExpression: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">ApiId</a></code> | <code>*string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">RouteKey</a></code> | <code>*string</code> | The route key for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | Specifies whether an API key is required for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | The authorization scopes supported by this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | The authorization type for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | The identifier of the ``Authorizer`` resource to be associated with this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>*string</code> | The model selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">OperationName</a></code> | <code>*string</code> | The operation name for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">RequestModels</a></code> | <code>*string</code> | The request models for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters">RequestParameters</a></code> | <code>*string</code> | The request parameters for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>*string</code> | The route response selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">Target</a></code> | <code>*string</code> | The target for the route. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```go
RouteKey *string
```

- *Type:* *string

The route key for the route.

For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```go
ApiKeyRequired interface{}
```

- *Type:* interface{}

Specifies whether an API key is required for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```go
AuthorizationScopes *[]*string
```

- *Type:* *[]*string

The authorization scopes supported by this route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

The authorization type for the route.

For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

The identifier of the ``Authorizer`` resource to be associated with this route.

The authorizer identifier is generated by API Gateway when you created the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}

---

##### `ModelSelectionExpression`<sup>Optional</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```go
ModelSelectionExpression *string
```

- *Type:* *string

The model selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```go
OperationName *string
```

- *Type:* *string

The operation name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```go
RequestModels *string
```

- *Type:* *string

The request models for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters"></a>

```go
RequestParameters *string
```

- *Type:* *string

The request parameters for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#request_parameters Apigatewayv2Route#request_parameters}

---

##### `RouteResponseSelectionExpression`<sup>Optional</sup> <a name="RouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```go
RouteResponseSelectionExpression *string
```

- *Type:* *string

The route response selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

The target for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}

---



