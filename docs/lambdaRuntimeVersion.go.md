# `lambdaRuntimeVersion` Submodule <a name="`lambdaRuntimeVersion` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeVersion <a name="LambdaRuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version awscc_lambda_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.NewLambdaRuntimeVersion(scope Construct, id *string, config LambdaRuntimeVersionConfig) LambdaRuntimeVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig">LambdaRuntimeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig">LambdaRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetReleaseNotes">ResetReleaseNotes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetReleaseNotes` <a name="ResetReleaseNotes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetReleaseNotes"></a>

```go
func ResetReleaseNotes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaRuntimeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.LambdaRuntimeVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.LambdaRuntimeVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.LambdaRuntimeVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.LambdaRuntimeVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaRuntimeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaRuntimeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference">LambdaRuntimeVersionCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.platforms">Platforms</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList">LambdaRuntimeVersionPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.resolvedUri">ResolvedUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotesInput">ReleaseNotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeNameInput">RuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.compatibility"></a>

```go
func Compatibility() LambdaRuntimeVersionCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference">LambdaRuntimeVersionCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.platforms"></a>

```go
func Platforms() LambdaRuntimeVersionPlatformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList">LambdaRuntimeVersionPlatformsList</a>

---

##### `ResolvedUri`<sup>Required</sup> <a name="ResolvedUri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.resolvedUri"></a>

```go
func ResolvedUri() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReleaseNotesInput`<sup>Optional</sup> <a name="ReleaseNotesInput" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotesInput"></a>

```go
func ReleaseNotesInput() *string
```

- *Type:* *string

---

##### `RuntimeNameInput`<sup>Optional</sup> <a name="RuntimeNameInput" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeNameInput"></a>

```go
func RuntimeNameInput() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotes"></a>

```go
func ReleaseNotes() *string
```

- *Type:* *string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeVersionCompatibility <a name="LambdaRuntimeVersionCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

&lambdaruntimeversion.LambdaRuntimeVersionCompatibility {

}
```


### LambdaRuntimeVersionConfig <a name="LambdaRuntimeVersionConfig" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

&lambdaruntimeversion.LambdaRuntimeVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuntimeName: *string,
	ImageUri: *string,
	ReleaseNotes: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.name">Name</a></code> | <code>*string</code> | The version identifier (1-128 chars, alphanumeric plus _.-). |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.imageUri">ImageUri</a></code> | <code>*string</code> | The URI of the OCI image to publish as this runtime version. Not returned in Read. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The version identifier (1-128 chars, alphanumeric plus _.-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#name LambdaRuntimeVersion#name}

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.runtimeName"></a>

```go
RuntimeName *string
```

- *Type:* *string

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#runtime_name LambdaRuntimeVersion#runtime_name}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The URI of the OCI image to publish as this runtime version. Not returned in Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#image_uri LambdaRuntimeVersion#image_uri}

---

##### `ReleaseNotes`<sup>Optional</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.releaseNotes"></a>

```go
ReleaseNotes *string
```

- *Type:* *string

Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#release_notes LambdaRuntimeVersion#release_notes}

---

### LambdaRuntimeVersionPlatforms <a name="LambdaRuntimeVersionPlatforms" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

&lambdaruntimeversion.LambdaRuntimeVersionPlatforms {

}
```


## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeVersionCompatibilityOutputReference <a name="LambdaRuntimeVersionCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.NewLambdaRuntimeVersionCompatibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaRuntimeVersionCompatibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility">LambdaRuntimeVersionCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels"></a>

```go
func IntegrationModels() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances"></a>

```go
func ManagedInstances() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaRuntimeVersionCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility">LambdaRuntimeVersionCompatibility</a>

---


### LambdaRuntimeVersionPlatformsList <a name="LambdaRuntimeVersionPlatformsList" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.NewLambdaRuntimeVersionPlatformsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaRuntimeVersionPlatformsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get"></a>

```go
func Get(index *f64) LambdaRuntimeVersionPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LambdaRuntimeVersionPlatformsOutputReference <a name="LambdaRuntimeVersionPlatformsOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/lambdaruntimeversion"

lambdaruntimeversion.NewLambdaRuntimeVersionPlatformsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaRuntimeVersionPlatformsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms">LambdaRuntimeVersionPlatforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaRuntimeVersionPlatforms
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms">LambdaRuntimeVersionPlatforms</a>

---



