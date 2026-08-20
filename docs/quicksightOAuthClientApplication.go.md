# `quicksightOAuthClientApplication` Submodule <a name="`quicksightOAuthClientApplication` Submodule" id="@cdktn/provider-awscc.quicksightOAuthClientApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightOAuthClientApplication <a name="QuicksightOAuthClientApplication" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.NewQuicksightOAuthClientApplication(scope Construct, id *string, config QuicksightOAuthClientApplicationConfig) QuicksightOAuthClientApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties">PutIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType">ResetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties">ResetIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl">ResetOAuthAuthorizationEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes">ResetOAuthScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProviderVpcConnectionProperties` <a name="PutIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties"></a>

```go
func PutIdentityProviderVpcConnectionProperties(value QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDataSourceType` <a name="ResetDataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType"></a>

```go
func ResetDataSourceType()
```

##### `ResetIdentityProviderVpcConnectionProperties` <a name="ResetIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties"></a>

```go
func ResetIdentityProviderVpcConnectionProperties()
```

##### `ResetOAuthAuthorizationEndpointUrl` <a name="ResetOAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl"></a>

```go
func ResetOAuthAuthorizationEndpointUrl()
```

##### `ResetOAuthScopes` <a name="ResetOAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes"></a>

```go
func ResetOAuthScopes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.QuicksightOAuthClientApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.QuicksightOAuthClientApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.QuicksightOAuthClientApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.QuicksightOAuthClientApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightOAuthClientApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightOAuthClientApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightOAuthClientApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties">IdentityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput">IdentityProviderVpcConnectionPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput">OAuthAuthorizationEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput">OAuthClientApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput">OAuthClientAuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput">OAuthScopesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput">OAuthTokenEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl">OAuthAuthorizationEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId">OAuthClientApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType">OAuthClientAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes">OAuthScopes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl">OAuthTokenEndpointUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderVpcConnectionProperties`<sup>Required</sup> <a name="IdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties"></a>

```go
func IdentityProviderVpcConnectionProperties() QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags"></a>

```go
func Tags() QuicksightOAuthClientApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput"></a>

```go
func DataSourceTypeInput() *string
```

- *Type:* *string

---

##### `IdentityProviderVpcConnectionPropertiesInput`<sup>Optional</sup> <a name="IdentityProviderVpcConnectionPropertiesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput"></a>

```go
func IdentityProviderVpcConnectionPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OAuthAuthorizationEndpointUrlInput`<sup>Optional</sup> <a name="OAuthAuthorizationEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput"></a>

```go
func OAuthAuthorizationEndpointUrlInput() *string
```

- *Type:* *string

---

##### `OAuthClientApplicationIdInput`<sup>Optional</sup> <a name="OAuthClientApplicationIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput"></a>

```go
func OAuthClientApplicationIdInput() *string
```

- *Type:* *string

---

##### `OAuthClientAuthenticationTypeInput`<sup>Optional</sup> <a name="OAuthClientAuthenticationTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput"></a>

```go
func OAuthClientAuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `OAuthScopesInput`<sup>Optional</sup> <a name="OAuthScopesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput"></a>

```go
func OAuthScopesInput() *string
```

- *Type:* *string

---

##### `OAuthTokenEndpointUrlInput`<sup>Optional</sup> <a name="OAuthTokenEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput"></a>

```go
func OAuthTokenEndpointUrlInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OAuthAuthorizationEndpointUrl`<sup>Required</sup> <a name="OAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl"></a>

```go
func OAuthAuthorizationEndpointUrl() *string
```

- *Type:* *string

---

##### `OAuthClientApplicationId`<sup>Required</sup> <a name="OAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId"></a>

```go
func OAuthClientApplicationId() *string
```

- *Type:* *string

---

##### `OAuthClientAuthenticationType`<sup>Required</sup> <a name="OAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType"></a>

```go
func OAuthClientAuthenticationType() *string
```

- *Type:* *string

---

##### `OAuthScopes`<sup>Required</sup> <a name="OAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes"></a>

```go
func OAuthScopes() *string
```

- *Type:* *string

---

##### `OAuthTokenEndpointUrl`<sup>Required</sup> <a name="OAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl"></a>

```go
func OAuthTokenEndpointUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightOAuthClientApplicationConfig <a name="QuicksightOAuthClientApplicationConfig" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

&quicksightoauthclientapplication.QuicksightOAuthClientApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OAuthClientApplicationId: *string,
	OAuthClientAuthenticationType: *string,
	OAuthTokenEndpointUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	DataSourceType: *string,
	IdentityProviderVpcConnectionProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties,
	OAuthAuthorizationEndpointUrl: *string,
	OAuthScopes: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId">OAuthClientApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType">OAuthClientAuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl">OAuthTokenEndpointUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties">IdentityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl">OAuthAuthorizationEndpointUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes">OAuthScopes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}.

---

##### `OAuthClientApplicationId`<sup>Required</sup> <a name="OAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId"></a>

```go
OAuthClientApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}.

---

##### `OAuthClientAuthenticationType`<sup>Required</sup> <a name="OAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType"></a>

```go
OAuthClientAuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}.

---

##### `OAuthTokenEndpointUrl`<sup>Required</sup> <a name="OAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl"></a>

```go
OAuthTokenEndpointUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}.

---

##### `DataSourceType`<sup>Optional</sup> <a name="DataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType"></a>

```go
DataSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}.

---

##### `IdentityProviderVpcConnectionProperties`<sup>Optional</sup> <a name="IdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties"></a>

```go
IdentityProviderVpcConnectionProperties QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}.

---

##### `OAuthAuthorizationEndpointUrl`<sup>Optional</sup> <a name="OAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl"></a>

```go
OAuthAuthorizationEndpointUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}.

---

##### `OAuthScopes`<sup>Optional</sup> <a name="OAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes"></a>

```go
OAuthScopes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}.

---

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

&quicksightoauthclientapplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties {
	VpcConnectionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}. |

---

##### `VpcConnectionArn`<sup>Optional</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn"></a>

```go
VpcConnectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}.

---

### QuicksightOAuthClientApplicationTags <a name="QuicksightOAuthClientApplicationTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

&quicksightoauthclientapplication.QuicksightOAuthClientApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.NewQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn">ResetVpcConnectionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcConnectionArn` <a name="ResetVpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn"></a>

```go
func ResetVpcConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">VpcConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConnectionArnInput`<sup>Optional</sup> <a name="VpcConnectionArnInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```go
func VpcConnectionArnInput() *string
```

- *Type:* *string

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```go
func VpcConnectionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightOAuthClientApplicationTagsList <a name="QuicksightOAuthClientApplicationTagsList" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.NewQuicksightOAuthClientApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightOAuthClientApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get"></a>

```go
func Get(index *f64) QuicksightOAuthClientApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightOAuthClientApplicationTagsOutputReference <a name="QuicksightOAuthClientApplicationTagsOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightoauthclientapplication"

quicksightoauthclientapplication.NewQuicksightOAuthClientApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightOAuthClientApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



