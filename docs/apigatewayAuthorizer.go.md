# `apigatewayAuthorizer` Submodule <a name="`apigatewayAuthorizer` Submodule" id="@cdktn/provider-awscc.apigatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayAuthorizer <a name="ApigatewayAuthorizer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer awscc_apigateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

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
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.putJwtConfiguration">PutJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerCredentials">ResetAuthorizerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentitySource">ResetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetJwtConfiguration">ResetJwtConfiguration</a></code> | *No description.* |
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

##### `PutJwtConfiguration` <a name="PutJwtConfiguration" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.putJwtConfiguration"></a>

```go
func PutJwtConfiguration(value ApigatewayAuthorizerJwtConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.putJwtConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration">ApigatewayAuthorizerJwtConfiguration</a>

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

##### `ResetJwtConfiguration` <a name="ResetJwtConfiguration" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetJwtConfiguration"></a>

```go
func ResetJwtConfiguration()
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
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

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
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.ApigatewayAuthorizer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.jwtConfiguration">JwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference">ApigatewayAuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentialsInput">AuthorizerCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySourceInput">IdentitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.jwtConfigurationInput">JwtConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
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

##### `JwtConfiguration`<sup>Required</sup> <a name="JwtConfiguration" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.jwtConfiguration"></a>

```go
func JwtConfiguration() ApigatewayAuthorizerJwtConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference">ApigatewayAuthorizerJwtConfigurationOutputReference</a>

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

##### `JwtConfigurationInput`<sup>Optional</sup> <a name="JwtConfigurationInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.jwtConfigurationInput"></a>

```go
func JwtConfigurationInput() interface{}
```

- *Type:* interface{}

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
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

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
	JwtConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration,
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
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials">AuthorizerCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource">IdentitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.jwtConfiguration">JwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration">ApigatewayAuthorizerJwtConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#jwt_configuration ApigatewayAuthorizer#jwt_configuration}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs">ProviderArNs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}.

---

##### `AuthorizerCredentials`<sup>Optional</sup> <a name="AuthorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials"></a>

```go
AuthorizerCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}.

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}.

---

##### `IdentitySource`<sup>Optional</sup> <a name="IdentitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource"></a>

```go
IdentitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression"></a>

```go
IdentityValidationExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}.

---

##### `JwtConfiguration`<sup>Optional</sup> <a name="JwtConfiguration" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.jwtConfiguration"></a>

```go
JwtConfiguration ApigatewayAuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration">ApigatewayAuthorizerJwtConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#jwt_configuration ApigatewayAuthorizer#jwt_configuration}.

---

##### `ProviderArNs`<sup>Optional</sup> <a name="ProviderArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs"></a>

```go
ProviderArNs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}.

---

### ApigatewayAuthorizerJwtConfiguration <a name="ApigatewayAuthorizerJwtConfiguration" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

&apigatewayauthorizer.ApigatewayAuthorizerJwtConfiguration {
	DefaultAlgorithms: *[]*string,
	Issuers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration.property.defaultAlgorithms">DefaultAlgorithms</a></code> | <code>*[]*string</code> | The signing algorithms the authorizer accepts: RS256, RS384, RS512, ES256, ES384 or ES512. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration.property.issuers">Issuers</a></code> | <code>interface{}</code> | The token issuers the authorizer accepts. |

---

##### `DefaultAlgorithms`<sup>Optional</sup> <a name="DefaultAlgorithms" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration.property.defaultAlgorithms"></a>

```go
DefaultAlgorithms *[]*string
```

- *Type:* *[]*string

The signing algorithms the authorizer accepts: RS256, RS384, RS512, ES256, ES384 or ES512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#default_algorithms ApigatewayAuthorizer#default_algorithms}

---

##### `Issuers`<sup>Optional</sup> <a name="Issuers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfiguration.property.issuers"></a>

```go
Issuers interface{}
```

- *Type:* interface{}

The token issuers the authorizer accepts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#issuers ApigatewayAuthorizer#issuers}

---

### ApigatewayAuthorizerJwtConfigurationIssuers <a name="ApigatewayAuthorizerJwtConfigurationIssuers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

&apigatewayauthorizer.ApigatewayAuthorizerJwtConfigurationIssuers {
	AdditionalClaims: interface{},
	Audiences: *[]*string,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.additionalClaims">AdditionalClaims</a></code> | <code>interface{}</code> | Other claims the token must carry. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.audiences">Audiences</a></code> | <code>*[]*string</code> | The values that the token's aud claim must contain at least one of. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.issuer">Issuer</a></code> | <code>*string</code> | The HTTPS URL that the token's iss claim must match. |

---

##### `AdditionalClaims`<sup>Optional</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.additionalClaims"></a>

```go
AdditionalClaims interface{}
```

- *Type:* interface{}

Other claims the token must carry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#additional_claims ApigatewayAuthorizer#additional_claims}

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

The values that the token's aud claim must contain at least one of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#audiences ApigatewayAuthorizer#audiences}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuers.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The HTTPS URL that the token's iss claim must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#issuer ApigatewayAuthorizer#issuer}

---

### ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims <a name="ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

&apigatewayauthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims {
	ClaimName: *string,
	ExpectedValues: *[]*string,
	Format: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.claimName">ClaimName</a></code> | <code>*string</code> | The claim name. Can't be iss, aud, exp, nbf, iat, scope or scp. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.expectedValues">ExpectedValues</a></code> | <code>*[]*string</code> | The value the claim must have. Leave it out to check only that the claim is present. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.format">Format</a></code> | <code>*string</code> | The claim's format. SINGLE_STRING is the only format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.required">Required</a></code> | <code>interface{}</code> | Whether the token must carry the claim. Defaults to false. |

---

##### `ClaimName`<sup>Optional</sup> <a name="ClaimName" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.claimName"></a>

```go
ClaimName *string
```

- *Type:* *string

The claim name. Can't be iss, aud, exp, nbf, iat, scope or scp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#claim_name ApigatewayAuthorizer#claim_name}

---

##### `ExpectedValues`<sup>Optional</sup> <a name="ExpectedValues" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.expectedValues"></a>

```go
ExpectedValues *[]*string
```

- *Type:* *[]*string

The value the claim must have. Leave it out to check only that the claim is present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#expected_values ApigatewayAuthorizer#expected_values}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.format"></a>

```go
Format *string
```

- *Type:* *string

The claim's format. SINGLE_STRING is the only format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#format ApigatewayAuthorizer#format}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the token must carry the claim. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#required ApigatewayAuthorizer#required}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList <a name="ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get"></a>

```go
func Get(index *f64) ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference <a name="ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetClaimName">ResetClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetExpectedValues">ResetExpectedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClaimName` <a name="ResetClaimName" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetClaimName"></a>

```go
func ResetClaimName()
```

##### `ResetExpectedValues` <a name="ResetExpectedValues" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetExpectedValues"></a>

```go
func ResetExpectedValues()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimNameInput">ClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValuesInput">ExpectedValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName">ClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues">ExpectedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimNameInput`<sup>Optional</sup> <a name="ClaimNameInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimNameInput"></a>

```go
func ClaimNameInput() *string
```

- *Type:* *string

---

##### `ExpectedValuesInput`<sup>Optional</sup> <a name="ExpectedValuesInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValuesInput"></a>

```go
func ExpectedValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ClaimName`<sup>Required</sup> <a name="ClaimName" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName"></a>

```go
func ClaimName() *string
```

- *Type:* *string

---

##### `ExpectedValues`<sup>Required</sup> <a name="ExpectedValues" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues"></a>

```go
func ExpectedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayAuthorizerJwtConfigurationIssuersList <a name="ApigatewayAuthorizerJwtConfigurationIssuersList" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizerJwtConfigurationIssuersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayAuthorizerJwtConfigurationIssuersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.get"></a>

```go
func Get(index *f64) ApigatewayAuthorizerJwtConfigurationIssuersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayAuthorizerJwtConfigurationIssuersOutputReference <a name="ApigatewayAuthorizerJwtConfigurationIssuersOutputReference" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizerJwtConfigurationIssuersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayAuthorizerJwtConfigurationIssuersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.putAdditionalClaims">PutAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetAdditionalClaims">ResetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalClaims` <a name="PutAdditionalClaims" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.putAdditionalClaims"></a>

```go
func PutAdditionalClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalClaims` <a name="ResetAdditionalClaims" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetAdditionalClaims"></a>

```go
func ResetAdditionalClaims()
```

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaimsInput">AdditionalClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims"></a>

```go
func AdditionalClaims() ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a>

---

##### `AdditionalClaimsInput`<sup>Optional</sup> <a name="AdditionalClaimsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaimsInput"></a>

```go
func AdditionalClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayAuthorizerJwtConfigurationOutputReference <a name="ApigatewayAuthorizerJwtConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/apigatewayauthorizer"

apigatewayauthorizer.NewApigatewayAuthorizerJwtConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayAuthorizerJwtConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.putIssuers">PutIssuers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resetDefaultAlgorithms">ResetDefaultAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resetIssuers">ResetIssuers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssuers` <a name="PutIssuers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.putIssuers"></a>

```go
func PutIssuers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.putIssuers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultAlgorithms` <a name="ResetDefaultAlgorithms" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resetDefaultAlgorithms"></a>

```go
func ResetDefaultAlgorithms()
```

##### `ResetIssuers` <a name="ResetIssuers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.resetIssuers"></a>

```go
func ResetIssuers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers">Issuers</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList">ApigatewayAuthorizerJwtConfigurationIssuersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithmsInput">DefaultAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.issuersInput">IssuersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms">DefaultAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Issuers`<sup>Required</sup> <a name="Issuers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers"></a>

```go
func Issuers() ApigatewayAuthorizerJwtConfigurationIssuersList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationIssuersList">ApigatewayAuthorizerJwtConfigurationIssuersList</a>

---

##### `DefaultAlgorithmsInput`<sup>Optional</sup> <a name="DefaultAlgorithmsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithmsInput"></a>

```go
func DefaultAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuersInput`<sup>Optional</sup> <a name="IssuersInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.issuersInput"></a>

```go
func IssuersInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAlgorithms`<sup>Required</sup> <a name="DefaultAlgorithms" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms"></a>

```go
func DefaultAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



