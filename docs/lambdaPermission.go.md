# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktn/provider-awscc.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission awscc_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

lambdapermission.NewLambdaPermission(scope Construct, id *string, config LambdaPermissionConfig) LambdaPermission
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetEventSourceToken">ResetEventSourceToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">ResetFunctionUrlAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl">ResetInvokedViaFunctionUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetPrincipalOrgId">ResetPrincipalOrgId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceAccount">ResetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEventSourceToken` <a name="ResetEventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```go
func ResetEventSourceToken()
```

##### `ResetFunctionUrlAuthType` <a name="ResetFunctionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```go
func ResetFunctionUrlAuthType()
```

##### `ResetInvokedViaFunctionUrl` <a name="ResetInvokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl"></a>

```go
func ResetInvokedViaFunctionUrl()
```

##### `ResetPrincipalOrgId` <a name="ResetPrincipalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```go
func ResetPrincipalOrgId()
```

##### `ResetSourceAccount` <a name="ResetSourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```go
func ResetSourceAccount()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```go
func ResetSourceArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

lambdapermission.LambdaPermission_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

lambdapermission.LambdaPermission_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

lambdapermission.LambdaPermission_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

lambdapermission.LambdaPermission_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.permissionId">PermissionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">EventSourceTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">FunctionUrlAuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput">InvokedViaFunctionUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgIdInput">PrincipalOrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccountInput">SourceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArnInput">SourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceToken">EventSourceToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl">InvokedViaFunctionUrl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgId">PrincipalOrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccount">SourceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PermissionId`<sup>Required</sup> <a name="PermissionId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.permissionId"></a>

```go
func PermissionId() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `EventSourceTokenInput`<sup>Optional</sup> <a name="EventSourceTokenInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```go
func EventSourceTokenInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `FunctionUrlAuthTypeInput`<sup>Optional</sup> <a name="FunctionUrlAuthTypeInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```go
func FunctionUrlAuthTypeInput() *string
```

- *Type:* *string

---

##### `InvokedViaFunctionUrlInput`<sup>Optional</sup> <a name="InvokedViaFunctionUrlInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput"></a>

```go
func InvokedViaFunctionUrlInput() interface{}
```

- *Type:* interface{}

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `PrincipalOrgIdInput`<sup>Optional</sup> <a name="PrincipalOrgIdInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```go
func PrincipalOrgIdInput() *string
```

- *Type:* *string

---

##### `SourceAccountInput`<sup>Optional</sup> <a name="SourceAccountInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```go
func SourceAccountInput() *string
```

- *Type:* *string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```go
func SourceArnInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `EventSourceToken`<sup>Required</sup> <a name="EventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```go
func EventSourceToken() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `FunctionUrlAuthType`<sup>Required</sup> <a name="FunctionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```go
func FunctionUrlAuthType() *string
```

- *Type:* *string

---

##### `InvokedViaFunctionUrl`<sup>Required</sup> <a name="InvokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl"></a>

```go
func InvokedViaFunctionUrl() interface{}
```

- *Type:* interface{}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `PrincipalOrgId`<sup>Required</sup> <a name="PrincipalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```go
func PrincipalOrgId() *string
```

- *Type:* *string

---

##### `SourceAccount`<sup>Required</sup> <a name="SourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```go
func SourceAccount() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdapermission"

&lambdapermission.LambdaPermissionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	FunctionName: *string,
	Principal: *string,
	EventSourceToken: *string,
	FunctionUrlAuthType: *string,
	InvokedViaFunctionUrl: interface{},
	PrincipalOrgId: *string,
	SourceAccount: *string,
	SourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.action">Action</a></code> | <code>*string</code> | The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | The name or ARN of the Lambda function, version, or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principal">Principal</a></code> | <code>*string</code> | The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">EventSourceToken</a></code> | <code>*string</code> | For Alexa Smart Home functions, a token that the invoker must supply. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">FunctionUrlAuthType</a></code> | <code>*string</code> | The type of authentication that your function URL uses. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl">InvokedViaFunctionUrl</a></code> | <code>interface{}</code> | Indicates whether the permission applies when the function is invoked through a function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">PrincipalOrgId</a></code> | <code>*string</code> | The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">SourceAccount</a></code> | <code>*string</code> | For AWS-service, the ID of the AWS-account that owns the resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceArn">SourceArn</a></code> | <code>*string</code> | For AWS-services, the ARN of the AWS resource that invokes the function. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#action LambdaPermission#action}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

The name or ARN of the Lambda function, version, or alias.

**Name formats**

* *Function name* ? `my-function` (name-only), `my-function:v1` (with alias).
* *Function ARN* ? `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
* *Partial ARN* ? `123456789012:function:my-function`.

You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

The AWS-service, AWS-account, IAM user, or IAM role that invokes the function.

If you specify a service, use `SourceArn` or `SourceAccount` to limit who can invoke the function through that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#principal LambdaPermission#principal}

---

##### `EventSourceToken`<sup>Optional</sup> <a name="EventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```go
EventSourceToken *string
```

- *Type:* *string

For Alexa Smart Home functions, a token that the invoker must supply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}

---

##### `FunctionUrlAuthType`<sup>Optional</sup> <a name="FunctionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```go
FunctionUrlAuthType *string
```

- *Type:* *string

The type of authentication that your function URL uses.

Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}

---

##### `InvokedViaFunctionUrl`<sup>Optional</sup> <a name="InvokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl"></a>

```go
InvokedViaFunctionUrl interface{}
```

- *Type:* interface{}

Indicates whether the permission applies when the function is invoked through a function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}

---

##### `PrincipalOrgId`<sup>Optional</sup> <a name="PrincipalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```go
PrincipalOrgId *string
```

- *Type:* *string

The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}

---

##### `SourceAccount`<sup>Optional</sup> <a name="SourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```go
SourceAccount *string
```

- *Type:* *string

For AWS-service, the ID of the AWS-account that owns the resource.

Use this together with `SourceArn` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```go
SourceArn *string
```

- *Type:* *string

For AWS-services, the ARN of the AWS resource that invokes the function.

For example, an Amazon S3 bucket or Amazon SNS topic.
Note that Lambda configures the comparison using the `StringLike` operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}

---



