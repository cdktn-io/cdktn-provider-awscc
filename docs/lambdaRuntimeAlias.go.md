# `lambdaRuntimeAlias` Submodule <a name="`lambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeAlias <a name="LambdaRuntimeAlias" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.NewLambdaRuntimeAlias(scope Construct, id *string, config LambdaRuntimeAliasConfig) LambdaRuntimeAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle">PutReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle">ResetReleaseLifecycle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReleaseLifecycle` <a name="PutReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle"></a>

```go
func PutReleaseLifecycle(value LambdaRuntimeAliasReleaseLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetReleaseLifecycle` <a name="ResetReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle"></a>

```go
func ResetReleaseLifecycle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.LambdaRuntimeAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.LambdaRuntimeAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.LambdaRuntimeAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.LambdaRuntimeAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaRuntimeAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput">ReleaseLifecycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput">RuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility"></a>

```go
func Compatibility() LambdaRuntimeAliasCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ReleaseLifecycle`<sup>Required</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle"></a>

```go
func ReleaseLifecycle() LambdaRuntimeAliasReleaseLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn"></a>

```go
func RuntimeVersionArn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReleaseLifecycleInput`<sup>Optional</sup> <a name="ReleaseLifecycleInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput"></a>

```go
func ReleaseLifecycleInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimeNameInput`<sup>Optional</sup> <a name="RuntimeNameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput"></a>

```go
func RuntimeNameInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeAliasCompatibility <a name="LambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

&lambdaruntimealias.LambdaRuntimeAliasCompatibility {

}
```


### LambdaRuntimeAliasConfig <a name="LambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

&lambdaruntimealias.LambdaRuntimeAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuntimeName: *string,
	RuntimeVersion: *string,
	Description: *string,
	ReleaseLifecycle: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name">Name</a></code> | <code>*string</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | The runtime version this alias points to. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description">Description</a></code> | <code>*string</code> | A description of the runtime alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName"></a>

```go
RuntimeName *string
```

- *Type:* *string

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

The runtime version this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the runtime alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}

---

##### `ReleaseLifecycle`<sup>Optional</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle"></a>

```go
ReleaseLifecycle LambdaRuntimeAliasReleaseLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}

---

### LambdaRuntimeAliasReleaseLifecycle <a name="LambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

&lambdaruntimealias.LambdaRuntimeAliasReleaseLifecycle {
	DeprecationDate: *string,
	FunctionCreateBlockDate: *string,
	FunctionUpdateBlockDate: *string,
	ReleaseState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate">DeprecationDate</a></code> | <code>*string</code> | The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>*string</code> | The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>*string</code> | The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState">ReleaseState</a></code> | <code>*string</code> | The release state of the alias. |

---

##### `DeprecationDate`<sup>Optional</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate"></a>

```go
DeprecationDate *string
```

- *Type:* *string

The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}

---

##### `FunctionCreateBlockDate`<sup>Optional</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate"></a>

```go
FunctionCreateBlockDate *string
```

- *Type:* *string

The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}

---

##### `FunctionUpdateBlockDate`<sup>Optional</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate"></a>

```go
FunctionUpdateBlockDate *string
```

- *Type:* *string

The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}

---

##### `ReleaseState`<sup>Optional</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState"></a>

```go
ReleaseState *string
```

- *Type:* *string

The release state of the alias.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeAliasCompatibilityOutputReference <a name="LambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.NewLambdaRuntimeAliasCompatibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaRuntimeAliasCompatibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```go
func IntegrationModels() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```go
func ManagedInstances() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaRuntimeAliasCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a>

---


### LambdaRuntimeAliasReleaseLifecycleOutputReference <a name="LambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimealias"

lambdaruntimealias.NewLambdaRuntimeAliasReleaseLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaRuntimeAliasReleaseLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate">ResetDeprecationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">ResetFunctionCreateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">ResetFunctionUpdateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState">ResetReleaseState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeprecationDate` <a name="ResetDeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```go
func ResetDeprecationDate()
```

##### `ResetFunctionCreateBlockDate` <a name="ResetFunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```go
func ResetFunctionCreateBlockDate()
```

##### `ResetFunctionUpdateBlockDate` <a name="ResetFunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```go
func ResetFunctionUpdateBlockDate()
```

##### `ResetReleaseState` <a name="ResetReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState"></a>

```go
func ResetReleaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput">DeprecationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">FunctionCreateBlockDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">FunctionUpdateBlockDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput">ReleaseStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">DeprecationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">ReleaseState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeprecationDateInput`<sup>Optional</sup> <a name="DeprecationDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```go
func DeprecationDateInput() *string
```

- *Type:* *string

---

##### `FunctionCreateBlockDateInput`<sup>Optional</sup> <a name="FunctionCreateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```go
func FunctionCreateBlockDateInput() *string
```

- *Type:* *string

---

##### `FunctionUpdateBlockDateInput`<sup>Optional</sup> <a name="FunctionUpdateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```go
func FunctionUpdateBlockDateInput() *string
```

- *Type:* *string

---

##### `ReleaseStateInput`<sup>Optional</sup> <a name="ReleaseStateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```go
func ReleaseStateInput() *string
```

- *Type:* *string

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```go
func DeprecationDate() *string
```

- *Type:* *string

---

##### `FunctionCreateBlockDate`<sup>Required</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```go
func FunctionCreateBlockDate() *string
```

- *Type:* *string

---

##### `FunctionUpdateBlockDate`<sup>Required</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```go
func FunctionUpdateBlockDate() *string
```

- *Type:* *string

---

##### `ReleaseState`<sup>Required</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```go
func ReleaseState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



