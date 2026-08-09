# `cloudfrontConnectionFunction` Submodule <a name="`cloudfrontConnectionFunction` Submodule" id="@cdktn/provider-awscc.cloudfrontConnectionFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontConnectionFunction <a name="CloudfrontConnectionFunction" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function awscc_cloudfront_connection_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunction(scope Construct, id *string, config CloudfrontConnectionFunctionConfig) CloudfrontConnectionFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig">CloudfrontConnectionFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig">CloudfrontConnectionFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig">PutConnectionFunctionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetAutoPublish">ResetAutoPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionFunctionConfig` <a name="PutConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig"></a>

```go
func PutConnectionFunctionConfig(value CloudfrontConnectionFunctionConnectionFunctionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoPublish` <a name="ResetAutoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetAutoPublish"></a>

```go
func ResetAutoPublish()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.CloudfrontConnectionFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.CloudfrontConnectionFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.CloudfrontConnectionFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.CloudfrontConnectionFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontConnectionFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontConnectionFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontConnectionFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn">ConnectionFunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig">ConnectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionId">ConnectionFunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList">CloudfrontConnectionFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublishInput">AutoPublishInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput">ConnectionFunctionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput">ConnectionFunctionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublish">AutoPublish</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode">ConnectionFunctionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionFunctionArn`<sup>Required</sup> <a name="ConnectionFunctionArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn"></a>

```go
func ConnectionFunctionArn() *string
```

- *Type:* *string

---

##### `ConnectionFunctionConfig`<sup>Required</sup> <a name="ConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig"></a>

```go
func ConnectionFunctionConfig() CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a>

---

##### `ConnectionFunctionId`<sup>Required</sup> <a name="ConnectionFunctionId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionId"></a>

```go
func ConnectionFunctionId() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags"></a>

```go
func Tags() CloudfrontConnectionFunctionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList">CloudfrontConnectionFunctionTagsList</a>

---

##### `AutoPublishInput`<sup>Optional</sup> <a name="AutoPublishInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublishInput"></a>

```go
func AutoPublishInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionFunctionCodeInput`<sup>Optional</sup> <a name="ConnectionFunctionCodeInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput"></a>

```go
func ConnectionFunctionCodeInput() *string
```

- *Type:* *string

---

##### `ConnectionFunctionConfigInput`<sup>Optional</sup> <a name="ConnectionFunctionConfigInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput"></a>

```go
func ConnectionFunctionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoPublish`<sup>Required</sup> <a name="AutoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublish"></a>

```go
func AutoPublish() interface{}
```

- *Type:* interface{}

---

##### `ConnectionFunctionCode`<sup>Required</sup> <a name="ConnectionFunctionCode" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode"></a>

```go
func ConnectionFunctionCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

&cloudfrontconnectionfunction.CloudfrontConnectionFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionFunctionCode: *string,
	ConnectionFunctionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig,
	Name: *string,
	AutoPublish: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode">ConnectionFunctionCode</a></code> | <code>*string</code> | The code for the connection function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig">ConnectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | Contains configuration information about a CloudFront function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name">Name</a></code> | <code>*string</code> | The connection function name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.autoPublish">AutoPublish</a></code> | <code>interface{}</code> | A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionFunctionCode`<sup>Required</sup> <a name="ConnectionFunctionCode" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode"></a>

```go
ConnectionFunctionCode *string
```

- *Type:* *string

The code for the connection function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}

---

##### `ConnectionFunctionConfig`<sup>Required</sup> <a name="ConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig"></a>

```go
ConnectionFunctionConfig CloudfrontConnectionFunctionConnectionFunctionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

Contains configuration information about a CloudFront function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_config CloudfrontConnectionFunction#connection_function_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The connection function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}

---

##### `AutoPublish`<sup>Optional</sup> <a name="AutoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.autoPublish"></a>

```go
AutoPublish interface{}
```

- *Type:* interface{}

A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#auto_publish CloudfrontConnectionFunction#auto_publish}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}

---

### CloudfrontConnectionFunctionConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

&cloudfrontconnectionfunction.CloudfrontConnectionFunctionConnectionFunctionConfig {
	Comment: *string,
	Runtime: *string,
	KeyValueStoreAssociations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment">Comment</a></code> | <code>*string</code> | A comment to describe the function. The comment cannot be longer than 128 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | The function's runtime environment version. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociations">KeyValueStoreAssociations</a></code> | <code>interface{}</code> | The configuration for the key value store associations. |

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A comment to describe the function. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#comment CloudfrontConnectionFunction#comment}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The function's runtime environment version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#runtime CloudfrontConnectionFunction#runtime}

---

##### `KeyValueStoreAssociations`<sup>Optional</sup> <a name="KeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociations"></a>

```go
KeyValueStoreAssociations interface{}
```

- *Type:* interface{}

The configuration for the key value store associations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#key_value_store_associations CloudfrontConnectionFunction#key_value_store_associations}

---

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

&cloudfrontconnectionfunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations {
	KeyValueStoreArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the key value store association. |

---

##### `KeyValueStoreArn`<sup>Optional</sup> <a name="KeyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.property.keyValueStoreArn"></a>

```go
KeyValueStoreArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the key value store association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#key_value_store_arn CloudfrontConnectionFunction#key_value_store_arn}

---

### CloudfrontConnectionFunctionTags <a name="CloudfrontConnectionFunctionTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

&cloudfrontconnectionfunction.CloudfrontConnectionFunctionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.key">Key</a></code> | <code>*string</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.value">Value</a></code> | <code>*string</code> | A string that contains an optional ``Tag`` value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get"></a>

```go
func Get(index *f64) CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resetKeyValueStoreArn">ResetKeyValueStoreArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyValueStoreArn` <a name="ResetKeyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resetKeyValueStoreArn"></a>

```go
func ResetKeyValueStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArnInput">KeyValueStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyValueStoreArnInput`<sup>Optional</sup> <a name="KeyValueStoreArnInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArnInput"></a>

```go
func KeyValueStoreArnInput() *string
```

- *Type:* *string

---

##### `KeyValueStoreArn`<sup>Required</sup> <a name="KeyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn"></a>

```go
func KeyValueStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunctionConnectionFunctionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations">PutKeyValueStoreAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociations">ResetKeyValueStoreAssociations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyValueStoreAssociations` <a name="PutKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations"></a>

```go
func PutKeyValueStoreAssociations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKeyValueStoreAssociations` <a name="ResetKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociations"></a>

```go
func ResetKeyValueStoreAssociations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations">KeyValueStoreAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationsInput">KeyValueStoreAssociationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyValueStoreAssociations`<sup>Required</sup> <a name="KeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations"></a>

```go
func KeyValueStoreAssociations() CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `KeyValueStoreAssociationsInput`<sup>Optional</sup> <a name="KeyValueStoreAssociationsInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationsInput"></a>

```go
func KeyValueStoreAssociationsInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontConnectionFunctionTagsList <a name="CloudfrontConnectionFunctionTagsList" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunctionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontConnectionFunctionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get"></a>

```go
func Get(index *f64) CloudfrontConnectionFunctionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontConnectionFunctionTagsOutputReference <a name="CloudfrontConnectionFunctionTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontconnectionfunction"

cloudfrontconnectionfunction.NewCloudfrontConnectionFunctionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontConnectionFunctionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



