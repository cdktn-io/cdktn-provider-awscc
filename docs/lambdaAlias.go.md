# `lambdaAlias` Submodule <a name="`lambdaAlias` Submodule" id="@cdktn/provider-awscc.lambdaAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaAlias <a name="LambdaAlias" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias awscc_lambda_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.NewLambdaAlias(scope Construct, id *string, config LambdaAliasConfig) LambdaAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig">LambdaAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig">LambdaAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig">PutProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig">PutRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetProvisionedConcurrencyConfig">ResetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetRoutingConfig">ResetRoutingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisionedConcurrencyConfig` <a name="PutProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig"></a>

```go
func PutProvisionedConcurrencyConfig(value LambdaAliasProvisionedConcurrencyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

---

##### `PutRoutingConfig` <a name="PutRoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig"></a>

```go
func PutRoutingConfig(value LambdaAliasRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetProvisionedConcurrencyConfig` <a name="ResetProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetProvisionedConcurrencyConfig"></a>

```go
func ResetProvisionedConcurrencyConfig()
```

##### `ResetRoutingConfig` <a name="ResetRoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetRoutingConfig"></a>

```go
func ResetRoutingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.LambdaAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.LambdaAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.LambdaAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.LambdaAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.aliasArn">AliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference">LambdaAliasProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersionInput">FunctionVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfigInput">ProvisionedConcurrencyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfigInput">RoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.aliasArn"></a>

```go
func AliasArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfig`<sup>Required</sup> <a name="ProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfig"></a>

```go
func ProvisionedConcurrencyConfig() LambdaAliasProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference">LambdaAliasProvisionedConcurrencyConfigOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfig"></a>

```go
func RoutingConfig() LambdaAliasRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `FunctionVersionInput`<sup>Optional</sup> <a name="FunctionVersionInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersionInput"></a>

```go
func FunctionVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfigInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfigInput"></a>

```go
func ProvisionedConcurrencyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingConfigInput`<sup>Optional</sup> <a name="RoutingConfigInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfigInput"></a>

```go
func RoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaAliasConfig <a name="LambdaAliasConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

&lambdaalias.LambdaAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionName: *string,
	FunctionVersion: *string,
	Name: *string,
	Description: *string,
	ProvisionedConcurrencyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig,
	RoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaAlias.LambdaAliasRoutingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | The function version that the alias invokes. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.name">Name</a></code> | <code>*string</code> | The name of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.description">Description</a></code> | <code>*string</code> | A description of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | The routing configuration of the alias. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#function_name LambdaAlias#function_name}

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionVersion"></a>

```go
FunctionVersion *string
```

- *Type:* *string

The function version that the alias invokes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#name LambdaAlias#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#description LambdaAlias#description}

---

##### `ProvisionedConcurrencyConfig`<sup>Optional</sup> <a name="ProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisionedConcurrencyConfig"></a>

```go
ProvisionedConcurrencyConfig LambdaAliasProvisionedConcurrencyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#provisioned_concurrency_config LambdaAlias#provisioned_concurrency_config}

---

##### `RoutingConfig`<sup>Optional</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.routingConfig"></a>

```go
RoutingConfig LambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

The routing configuration of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#routing_config LambdaAlias#routing_config}

---

### LambdaAliasProvisionedConcurrencyConfig <a name="LambdaAliasProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

&lambdaalias.LambdaAliasProvisionedConcurrencyConfig {
	ProvisionedConcurrentExecutions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">ProvisionedConcurrentExecutions</a></code> | <code>*f64</code> | The amount of provisioned concurrency to allocate for the alias. |

---

##### `ProvisionedConcurrentExecutions`<sup>Optional</sup> <a name="ProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```go
ProvisionedConcurrentExecutions *f64
```

- *Type:* *f64

The amount of provisioned concurrency to allocate for the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#provisioned_concurrent_executions LambdaAlias#provisioned_concurrent_executions}

---

### LambdaAliasRoutingConfig <a name="LambdaAliasRoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

&lambdaalias.LambdaAliasRoutingConfig {
	AdditionalVersionWeights: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights">AdditionalVersionWeights</a></code> | <code>interface{}</code> | The second version, and the percentage of traffic that's routed to it. |

---

##### `AdditionalVersionWeights`<sup>Optional</sup> <a name="AdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights"></a>

```go
AdditionalVersionWeights interface{}
```

- *Type:* interface{}

The second version, and the percentage of traffic that's routed to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}

---

### LambdaAliasRoutingConfigAdditionalVersionWeights <a name="LambdaAliasRoutingConfigAdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

&lambdaalias.LambdaAliasRoutingConfigAdditionalVersionWeights {
	FunctionVersion: *string,
	FunctionWeight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | The qualifier of the second version. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionWeight">FunctionWeight</a></code> | <code>*f64</code> | The percentage of traffic that the alias routes to the second version. |

---

##### `FunctionVersion`<sup>Optional</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionVersion"></a>

```go
FunctionVersion *string
```

- *Type:* *string

The qualifier of the second version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}

---

##### `FunctionWeight`<sup>Optional</sup> <a name="FunctionWeight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionWeight"></a>

```go
FunctionWeight *f64
```

- *Type:* *f64

The percentage of traffic that the alias routes to the second version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_alias#function_weight LambdaAlias#function_weight}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaAliasProvisionedConcurrencyConfigOutputReference <a name="LambdaAliasProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.NewLambdaAliasProvisionedConcurrencyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaAliasProvisionedConcurrencyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">ResetProvisionedConcurrentExecutions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisionedConcurrentExecutions` <a name="ResetProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```go
func ResetProvisionedConcurrentExecutions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">ProvisionedConcurrentExecutionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">ProvisionedConcurrentExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="ProvisionedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```go
func ProvisionedConcurrentExecutionsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedConcurrentExecutions`<sup>Required</sup> <a name="ProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```go
func ProvisionedConcurrentExecutions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaAliasRoutingConfigAdditionalVersionWeightsList <a name="LambdaAliasRoutingConfigAdditionalVersionWeightsList" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.NewLambdaAliasRoutingConfigAdditionalVersionWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaAliasRoutingConfigAdditionalVersionWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get"></a>

```go
func Get(index *f64) LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference <a name="LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.NewLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionVersion">ResetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionWeight">ResetFunctionWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionVersion` <a name="ResetFunctionVersion" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionVersion"></a>

```go
func ResetFunctionVersion()
```

##### `ResetFunctionWeight` <a name="ResetFunctionWeight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionWeight"></a>

```go
func ResetFunctionWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersionInput">FunctionVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeightInput">FunctionWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight">FunctionWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionVersionInput`<sup>Optional</sup> <a name="FunctionVersionInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersionInput"></a>

```go
func FunctionVersionInput() *string
```

- *Type:* *string

---

##### `FunctionWeightInput`<sup>Optional</sup> <a name="FunctionWeightInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeightInput"></a>

```go
func FunctionWeightInput() *f64
```

- *Type:* *f64

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `FunctionWeight`<sup>Required</sup> <a name="FunctionWeight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight"></a>

```go
func FunctionWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaAliasRoutingConfigOutputReference <a name="LambdaAliasRoutingConfigOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdaalias"

lambdaalias.NewLambdaAliasRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaAliasRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights">PutAdditionalVersionWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights">ResetAdditionalVersionWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalVersionWeights` <a name="PutAdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights"></a>

```go
func PutAdditionalVersionWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalVersionWeights` <a name="ResetAdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights"></a>

```go
func ResetAdditionalVersionWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights">AdditionalVersionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList">LambdaAliasRoutingConfigAdditionalVersionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput">AdditionalVersionWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalVersionWeights`<sup>Required</sup> <a name="AdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights"></a>

```go
func AdditionalVersionWeights() LambdaAliasRoutingConfigAdditionalVersionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList">LambdaAliasRoutingConfigAdditionalVersionWeightsList</a>

---

##### `AdditionalVersionWeightsInput`<sup>Optional</sup> <a name="AdditionalVersionWeightsInput" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput"></a>

```go
func AdditionalVersionWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



