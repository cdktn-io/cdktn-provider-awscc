# `lambdaUrl` Submodule <a name="`lambdaUrl` Submodule" id="@cdktn/provider-awscc.lambdaUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaUrl <a name="LambdaUrl" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url awscc_lambda_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.NewLambdaUrl(scope Construct, id *string, config LambdaUrlConfig) LambdaUrl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig">LambdaUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig">LambdaUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode">ResetInvokeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier">ResetQualifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCors` <a name="PutCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors"></a>

```go
func PutCors(value LambdaUrlCors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---

##### `ResetCors` <a name="ResetCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors"></a>

```go
func ResetCors()
```

##### `ResetInvokeMode` <a name="ResetInvokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode"></a>

```go
func ResetInvokeMode()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier"></a>

```go
func ResetQualifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.LambdaUrl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.LambdaUrl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.LambdaUrl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.LambdaUrl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl">FunctionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput">CorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput">InvokeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput">TargetFunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode">InvokeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn">TargetFunctionArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors"></a>

```go
func Cors() LambdaUrlCorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a>

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionUrl`<sup>Required</sup> <a name="FunctionUrl" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl"></a>

```go
func FunctionUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput"></a>

```go
func CorsInput() interface{}
```

- *Type:* interface{}

---

##### `InvokeModeInput`<sup>Optional</sup> <a name="InvokeModeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput"></a>

```go
func InvokeModeInput() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `TargetFunctionArnInput`<sup>Optional</sup> <a name="TargetFunctionArnInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput"></a>

```go
func TargetFunctionArnInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InvokeMode`<sup>Required</sup> <a name="InvokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode"></a>

```go
func InvokeMode() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `TargetFunctionArn`<sup>Required</sup> <a name="TargetFunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn"></a>

```go
func TargetFunctionArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaUrlConfig <a name="LambdaUrlConfig" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

&lambdaurl.LambdaUrlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthType: *string,
	TargetFunctionArn: *string,
	Cors: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaUrl.LambdaUrlCors,
	InvokeMode: *string,
	Qualifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType">AuthType</a></code> | <code>*string</code> | Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn">TargetFunctionArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the function associated with the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode">InvokeMode</a></code> | <code>*string</code> | The invocation mode for the function's URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#auth_type LambdaUrl#auth_type}

---

##### `TargetFunctionArn`<sup>Required</sup> <a name="TargetFunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn"></a>

```go
TargetFunctionArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the function associated with the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#target_function_arn LambdaUrl#target_function_arn}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors"></a>

```go
Cors LambdaUrlCors
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}.

---

##### `InvokeMode`<sup>Optional</sup> <a name="InvokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode"></a>

```go
InvokeMode *string
```

- *Type:* *string

The invocation mode for the function's URL.

Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#invoke_mode LambdaUrl#invoke_mode}

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#qualifier LambdaUrl#qualifier}

---

### LambdaUrlCors <a name="LambdaUrlCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

&lambdaurl.LambdaUrlCors {
	AllowCredentials: interface{},
	AllowHeaders: *[]*string,
	AllowMethods: *[]*string,
	AllowOrigins: *[]*string,
	ExposeHeaders: *[]*string,
	MaxAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | Specifies whether credentials are included in the CORS request. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | Represents a collection of allowed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | Represents a collection of allowed HTTP methods. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | Represents a collection of allowed origins. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | Represents a collection of exposed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge">MaxAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}. |

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

Specifies whether credentials are included in the CORS request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_credentials LambdaUrl#allow_credentials}

---

##### `AllowHeaders`<sup>Optional</sup> <a name="AllowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders"></a>

```go
AllowHeaders *[]*string
```

- *Type:* *[]*string

Represents a collection of allowed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_headers LambdaUrl#allow_headers}

---

##### `AllowMethods`<sup>Optional</sup> <a name="AllowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods"></a>

```go
AllowMethods *[]*string
```

- *Type:* *[]*string

Represents a collection of allowed HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_methods LambdaUrl#allow_methods}

---

##### `AllowOrigins`<sup>Optional</sup> <a name="AllowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins"></a>

```go
AllowOrigins *[]*string
```

- *Type:* *[]*string

Represents a collection of allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_origins LambdaUrl#allow_origins}

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders"></a>

```go
ExposeHeaders *[]*string
```

- *Type:* *[]*string

Represents a collection of exposed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#expose_headers LambdaUrl#expose_headers}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaUrlCorsOutputReference <a name="LambdaUrlCorsOutputReference" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaurl"

lambdaurl.NewLambdaUrlCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaUrlCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders">ResetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods">ResetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins">ResetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowHeaders` <a name="ResetAllowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders"></a>

```go
func ResetAllowHeaders()
```

##### `ResetAllowMethods` <a name="ResetAllowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods"></a>

```go
func ResetAllowMethods()
```

##### `ResetAllowOrigins` <a name="ResetAllowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins"></a>

```go
func ResetAllowOrigins()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders"></a>

```go
func ResetExposeHeaders()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput">AllowHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput">AllowMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput">AllowOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHeadersInput`<sup>Optional</sup> <a name="AllowHeadersInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput"></a>

```go
func AllowHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethodsInput`<sup>Optional</sup> <a name="AllowMethodsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput"></a>

```go
func AllowMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginsInput`<sup>Optional</sup> <a name="AllowOriginsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput"></a>

```go
func AllowOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput"></a>

```go
func ExposeHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders"></a>

```go
func AllowHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods"></a>

```go
func AllowMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins"></a>

```go
func AllowOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders"></a>

```go
func ExposeHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



