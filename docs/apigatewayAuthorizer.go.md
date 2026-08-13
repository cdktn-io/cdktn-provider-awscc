# `apigatewayAuthorizer` Submodule <a name="`apigatewayAuthorizer` Submodule" id="@cdktn/provider-awscc.apigatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayAuthorizer <a name="ApigatewayAuthorizer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer awscc_apigateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizer(scope Construct, id *string, config ApigatewayAuthorizerConfig) ApigatewayAuthorizer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig">ApigatewayAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig">ApigatewayAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerCredentials">ResetAuthorizerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentitySource">ResetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetProviderArNs">ResetProviderArNs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthorizerCredentials` <a name="ResetAuthorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerCredentials"></a>

```go
func ResetAuthorizerCredentials()
```

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerResultTtlInSeconds"></a>

```go
func ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerUri"></a>

```go
func ResetAuthorizerUri()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetIdentitySource` <a name="ResetIdentitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentitySource"></a>

```go
func ResetIdentitySource()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentityValidationExpression"></a>

```go
func ResetIdentityValidationExpression()
```

##### `ResetProviderArNs` <a name="ResetProviderArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetProviderArNs"></a>

```go
func ResetProviderArNs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayAuthorizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigatewayAuthorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentialsInput">AuthorizerCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySourceInput">IdentitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNsInput">ProviderArNsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentials">AuthorizerCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySource">IdentitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNs">ProviderArNs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AuthorizerCredentialsInput`<sup>Optional</sup> <a name="AuthorizerCredentialsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentialsInput"></a>

```go
func AuthorizerCredentialsInput() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSecondsInput"></a>

```go
func AuthorizerResultTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUriInput"></a>

```go
func AuthorizerUriInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `IdentitySourceInput`<sup>Optional</sup> <a name="IdentitySourceInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySourceInput"></a>

```go
func IdentitySourceInput() *string
```

- *Type:* *string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpressionInput"></a>

```go
func IdentityValidationExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderArNsInput`<sup>Optional</sup> <a name="ProviderArNsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNsInput"></a>

```go
func ProviderArNsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AuthorizerCredentials`<sup>Required</sup> <a name="AuthorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentials"></a>

```go
func AuthorizerCredentials() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `IdentitySource`<sup>Required</sup> <a name="IdentitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySource"></a>

```go
func IdentitySource() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderArNs`<sup>Required</sup> <a name="ProviderArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNs"></a>

```go
func ProviderArNs() *[]*string
```

- *Type:* *[]*string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayAuthorizerConfig <a name="ApigatewayAuthorizerConfig" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayauthorizer"

&apigatewayauthorizer.ApigatewayAuthorizerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RestApiId: *string,
	Type: *string,
	AuthorizerCredentials: *string,
	AuthorizerResultTtlInSeconds: *f64,
	AuthorizerUri: *string,
	AuthType: *string,
	IdentitySource: *string,
	IdentityValidationExpression: *string,
	ProviderArNs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials">AuthorizerCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource">IdentitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs">ProviderArNs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}.

---

##### `AuthorizerCredentials`<sup>Optional</sup> <a name="AuthorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials"></a>

```go
AuthorizerCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}.

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}.

---

##### `IdentitySource`<sup>Optional</sup> <a name="IdentitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource"></a>

```go
IdentitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression"></a>

```go
IdentityValidationExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}.

---

##### `ProviderArNs`<sup>Optional</sup> <a name="ProviderArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs"></a>

```go
ProviderArNs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}.

---



