# `apigatewayv2RouteResponse` Submodule <a name="`apigatewayv2RouteResponse` Submodule" id="@cdktn/provider-awscc.apigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RouteResponse <a name="Apigatewayv2RouteResponse" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response awscc_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.NewApigatewayv2RouteResponse(scope Construct, id *string, config Apigatewayv2RouteResponseConfig) Apigatewayv2RouteResponse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters">PutResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression">ResetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels">ResetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResponseParameters` <a name="PutResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters"></a>

```go
func PutResponseParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetModelSelectionExpression` <a name="ResetModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression"></a>

```go
func ResetModelSelectionExpression()
```

##### `ResetResponseModels` <a name="ResetResponseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels"></a>

```go
func ResetResponseModels()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseParameters"></a>

```go
func ResetResponseParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.Apigatewayv2RouteResponse_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.Apigatewayv2RouteResponse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.Apigatewayv2RouteResponse_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.Apigatewayv2RouteResponse_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Apigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2RouteResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2RouteResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RouteResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParameters">ResponseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap">Apigatewayv2RouteResponseResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseId">RouteResponseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput">ModelSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput">ResponseModelsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParametersInput">ResponseParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput">RouteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput">RouteResponseKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels">ResponseModels</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId">RouteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey">RouteResponseKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParameters"></a>

```go
func ResponseParameters() Apigatewayv2RouteResponseResponseParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap">Apigatewayv2RouteResponseResponseParametersMap</a>

---

##### `RouteResponseId`<sup>Required</sup> <a name="RouteResponseId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseId"></a>

```go
func RouteResponseId() *string
```

- *Type:* *string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `ModelSelectionExpressionInput`<sup>Optional</sup> <a name="ModelSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput"></a>

```go
func ModelSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `ResponseModelsInput`<sup>Optional</sup> <a name="ResponseModelsInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput"></a>

```go
func ResponseModelsInput() *string
```

- *Type:* *string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParametersInput"></a>

```go
func ResponseParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RouteIdInput`<sup>Optional</sup> <a name="RouteIdInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput"></a>

```go
func RouteIdInput() *string
```

- *Type:* *string

---

##### `RouteResponseKeyInput`<sup>Optional</sup> <a name="RouteResponseKeyInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput"></a>

```go
func RouteResponseKeyInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```go
func ModelSelectionExpression() *string
```

- *Type:* *string

---

##### `ResponseModels`<sup>Required</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels"></a>

```go
func ResponseModels() *string
```

- *Type:* *string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId"></a>

```go
func RouteId() *string
```

- *Type:* *string

---

##### `RouteResponseKey`<sup>Required</sup> <a name="RouteResponseKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey"></a>

```go
func RouteResponseKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteResponseConfig <a name="Apigatewayv2RouteResponseConfig" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

&apigatewayv2routeresponse.Apigatewayv2RouteResponseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	RouteId: *string,
	RouteResponseKey: *string,
	ModelSelectionExpression: *string,
	ResponseModels: *string,
	ResponseParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId">ApiId</a></code> | <code>*string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId">RouteId</a></code> | <code>*string</code> | The route ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey">RouteResponseKey</a></code> | <code>*string</code> | The route response key. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>*string</code> | The model selection expression for the route response. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels">ResponseModels</a></code> | <code>*string</code> | The response models for the route response. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseParameters">ResponseParameters</a></code> | <code>interface{}</code> | The route response parameters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId"></a>

```go
RouteId *string
```

- *Type:* *string

The route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}

---

##### `RouteResponseKey`<sup>Required</sup> <a name="RouteResponseKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey"></a>

```go
RouteResponseKey *string
```

- *Type:* *string

The route response key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}

---

##### `ModelSelectionExpression`<sup>Optional</sup> <a name="ModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression"></a>

```go
ModelSelectionExpression *string
```

- *Type:* *string

The model selection expression for the route response. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}

---

##### `ResponseModels`<sup>Optional</sup> <a name="ResponseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels"></a>

```go
ResponseModels *string
```

- *Type:* *string

The response models for the route response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseParameters"></a>

```go
ResponseParameters interface{}
```

- *Type:* interface{}

The route response parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#response_parameters Apigatewayv2RouteResponse#response_parameters}

---

### Apigatewayv2RouteResponseResponseParameters <a name="Apigatewayv2RouteResponseResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

&apigatewayv2routeresponse.Apigatewayv2RouteResponseResponseParameters {
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.property.required">Required</a></code> | <code>interface{}</code> | Specifies whether the parameter is required. |

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Specifies whether the parameter is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route_response#required Apigatewayv2RouteResponse#required}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteResponseResponseParametersMap <a name="Apigatewayv2RouteResponseResponseParametersMap" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.NewApigatewayv2RouteResponseResponseParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2RouteResponseResponseParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get"></a>

```go
func Get(key *string) Apigatewayv2RouteResponseResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RouteResponseResponseParametersOutputReference <a name="Apigatewayv2RouteResponseResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routeresponse"

apigatewayv2routeresponse.NewApigatewayv2RouteResponseResponseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) Apigatewayv2RouteResponseResponseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



