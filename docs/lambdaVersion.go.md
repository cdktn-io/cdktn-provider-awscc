# `lambdaVersion` Submodule <a name="`lambdaVersion` Submodule" id="@cdktn/provider-awscc.lambdaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaVersion <a name="LambdaVersion" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version awscc_lambda_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.NewLambdaVersion(scope Construct, id *string, config LambdaVersionConfig) LambdaVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig">LambdaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig">LambdaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig">PutFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig">PutProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy">PutRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256">ResetCodeSha256</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig">ResetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig">ResetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy">ResetRuntimePolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFunctionScalingConfig` <a name="PutFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig"></a>

```go
func PutFunctionScalingConfig(value LambdaVersionFunctionScalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `PutProvisionedConcurrencyConfig` <a name="PutProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig"></a>

```go
func PutProvisionedConcurrencyConfig(value LambdaVersionProvisionedConcurrencyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `PutRuntimePolicy` <a name="PutRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy"></a>

```go
func PutRuntimePolicy(value LambdaVersionRuntimePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `ResetCodeSha256` <a name="ResetCodeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256"></a>

```go
func ResetCodeSha256()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFunctionScalingConfig` <a name="ResetFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig"></a>

```go
func ResetFunctionScalingConfig()
```

##### `ResetProvisionedConcurrencyConfig` <a name="ResetProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig"></a>

```go
func ResetProvisionedConcurrencyConfig()
```

##### `ResetRuntimePolicy` <a name="ResetRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy"></a>

```go
func ResetRuntimePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.LambdaVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.LambdaVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.LambdaVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.LambdaVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy">RuntimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input">CodeSha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput">FunctionScalingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput">ProvisionedConcurrencyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput">RuntimePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256">CodeSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionScalingConfig`<sup>Required</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig"></a>

```go
func FunctionScalingConfig() LambdaVersionFunctionScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfig`<sup>Required</sup> <a name="ProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig"></a>

```go
func ProvisionedConcurrencyConfig() LambdaVersionProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a>

---

##### `RuntimePolicy`<sup>Required</sup> <a name="RuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy"></a>

```go
func RuntimePolicy() LambdaVersionRuntimePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CodeSha256Input`<sup>Optional</sup> <a name="CodeSha256Input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input"></a>

```go
func CodeSha256Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `FunctionScalingConfigInput`<sup>Optional</sup> <a name="FunctionScalingConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput"></a>

```go
func FunctionScalingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput"></a>

```go
func ProvisionedConcurrencyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimePolicyInput`<sup>Optional</sup> <a name="RuntimePolicyInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput"></a>

```go
func RuntimePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `CodeSha256`<sup>Required</sup> <a name="CodeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256"></a>

```go
func CodeSha256() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaVersionConfig <a name="LambdaVersionConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

&lambdaversion.LambdaVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionName: *string,
	CodeSha256: *string,
	Description: *string,
	FunctionScalingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaVersion.LambdaVersionFunctionScalingConfig,
	ProvisionedConcurrencyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig,
	RuntimePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaVersion.LambdaVersionRuntimePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256">CodeSha256</a></code> | <code>*string</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description">Description</a></code> | <code>*string</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy">RuntimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `CodeSha256`<sup>Optional</sup> <a name="CodeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256"></a>

```go
CodeSha256 *string
```

- *Type:* *string

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `FunctionScalingConfig`<sup>Optional</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig"></a>

```go
FunctionScalingConfig LambdaVersionFunctionScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `ProvisionedConcurrencyConfig`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig"></a>

```go
ProvisionedConcurrencyConfig LambdaVersionProvisionedConcurrencyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `RuntimePolicy`<sup>Optional</sup> <a name="RuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy"></a>

```go
RuntimePolicy LambdaVersionRuntimePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

### LambdaVersionFunctionScalingConfig <a name="LambdaVersionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

&lambdaversion.LambdaVersionFunctionScalingConfig {
	MaxExecutionEnvironments: *f64,
	MinExecutionEnvironments: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>*f64</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>*f64</code> | The minimum number of execution environments to maintain for the function. |

---

##### `MaxExecutionEnvironments`<sup>Optional</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```go
MaxExecutionEnvironments *f64
```

- *Type:* *f64

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#max_execution_environments LambdaVersion#max_execution_environments}

---

##### `MinExecutionEnvironments`<sup>Optional</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```go
MinExecutionEnvironments *f64
```

- *Type:* *f64

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#min_execution_environments LambdaVersion#min_execution_environments}

---

### LambdaVersionProvisionedConcurrencyConfig <a name="LambdaVersionProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

&lambdaversion.LambdaVersionProvisionedConcurrencyConfig {
	ProvisionedConcurrentExecutions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">ProvisionedConcurrentExecutions</a></code> | <code>*f64</code> | The amount of provisioned concurrency to allocate for the version. |

---

##### `ProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="ProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```go
ProvisionedConcurrentExecutions *f64
```

- *Type:* *f64

The amount of provisioned concurrency to allocate for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#provisioned_concurrent_executions LambdaVersion#provisioned_concurrent_executions}

---

### LambdaVersionRuntimePolicy <a name="LambdaVersionRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

&lambdaversion.LambdaVersionRuntimePolicy {
	RuntimeVersionArn: *string,
	UpdateRuntimeOn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | The ARN of the runtime the function is configured to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>*string</code> | The runtime update mode. |

---

##### `RuntimeVersionArn`<sup>Optional</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn"></a>

```go
RuntimeVersionArn *string
```

- *Type:* *string

The ARN of the runtime the function is configured to use.

If the runtime update mode is manual, the ARN is returned, otherwise null is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#runtime_version_arn LambdaVersion#runtime_version_arn}

---

##### `UpdateRuntimeOn`<sup>Optional</sup> <a name="UpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn"></a>

```go
UpdateRuntimeOn *string
```

- *Type:* *string

The runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lambda_version#update_runtime_on LambdaVersion#update_runtime_on}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaVersionFunctionScalingConfigOutputReference <a name="LambdaVersionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.NewLambdaVersionFunctionScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaVersionFunctionScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">ResetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">ResetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxExecutionEnvironments` <a name="ResetMaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```go
func ResetMaxExecutionEnvironments()
```

##### `ResetMinExecutionEnvironments` <a name="ResetMinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```go
func ResetMinExecutionEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">MaxExecutionEnvironmentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">MinExecutionEnvironmentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MaxExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```go
func MaxExecutionEnvironmentsInput() *f64
```

- *Type:* *f64

---

##### `MinExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MinExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```go
func MinExecutionEnvironmentsInput() *f64
```

- *Type:* *f64

---

##### `MaxExecutionEnvironments`<sup>Required</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```go
func MaxExecutionEnvironments() *f64
```

- *Type:* *f64

---

##### `MinExecutionEnvironments`<sup>Required</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```go
func MinExecutionEnvironments() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaVersionProvisionedConcurrencyConfigOutputReference <a name="LambdaVersionProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.NewLambdaVersionProvisionedConcurrencyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaVersionProvisionedConcurrencyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">ResetProvisionedConcurrentExecutions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisionedConcurrentExecutions` <a name="ResetProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```go
func ResetProvisionedConcurrentExecutions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">ProvisionedConcurrentExecutionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">ProvisionedConcurrentExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="ProvisionedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```go
func ProvisionedConcurrentExecutionsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrentExecutions`<sup>Required</sup> <a name="ProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```go
func ProvisionedConcurrentExecutions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaVersionRuntimePolicyOutputReference <a name="LambdaVersionRuntimePolicyOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaversion"

lambdaversion.NewLambdaVersionRuntimePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaVersionRuntimePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn">ResetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn">ResetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuntimeVersionArn` <a name="ResetRuntimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn"></a>

```go
func ResetRuntimeVersionArn()
```

##### `ResetUpdateRuntimeOn` <a name="ResetUpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn"></a>

```go
func ResetUpdateRuntimeOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput">RuntimeVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput">UpdateRuntimeOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn">UpdateRuntimeOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuntimeVersionArnInput`<sup>Optional</sup> <a name="RuntimeVersionArnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput"></a>

```go
func RuntimeVersionArnInput() *string
```

- *Type:* *string

---

##### `UpdateRuntimeOnInput`<sup>Optional</sup> <a name="UpdateRuntimeOnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput"></a>

```go
func UpdateRuntimeOnInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn"></a>

```go
func RuntimeVersionArn() *string
```

- *Type:* *string

---

##### `UpdateRuntimeOn`<sup>Required</sup> <a name="UpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn"></a>

```go
func UpdateRuntimeOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



