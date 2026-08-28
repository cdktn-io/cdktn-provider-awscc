# `devopsagentService` Submodule <a name="`devopsagentService` Submodule" id="@cdktn/provider-awscc.devopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentService <a name="DevopsagentService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentService(scope Construct, id *string, config DevopsagentServiceConfig) DevopsagentService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig">DevopsagentServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig">DevopsagentServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails">PutServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName">ResetExchangeUrlPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName">ResetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails">ResetServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName">ResetTargetUrlPrivateConnectionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServiceDetails` <a name="PutServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails"></a>

```go
func PutServiceDetails(value DevopsagentServiceServiceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExchangeUrlPrivateConnectionName` <a name="ResetExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName"></a>

```go
func ResetExchangeUrlPrivateConnectionName()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetPrivateConnectionName` <a name="ResetPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName"></a>

```go
func ResetPrivateConnectionName()
```

##### `ResetServiceDetails` <a name="ResetServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails"></a>

```go
func ResetServiceDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetUrlPrivateConnectionName` <a name="ResetTargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName"></a>

```go
func ResetTargetUrlPrivateConnectionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.DevopsagentService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.DevopsagentService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.DevopsagentService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.DevopsagentService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsagentService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources">AccessibleResources</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails">AdditionalServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails">ServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput">ExchangeUrlPrivateConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput">PrivateConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput">ServiceDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput">TargetUrlPrivateConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName">ExchangeUrlPrivateConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName">TargetUrlPrivateConnectionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessibleResources`<sup>Required</sup> <a name="AccessibleResources" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources"></a>

```go
func AccessibleResources() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `AdditionalServiceDetails`<sup>Required</sup> <a name="AdditionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails"></a>

```go
func AdditionalServiceDetails() DevopsagentServiceAdditionalServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceDetails`<sup>Required</sup> <a name="ServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails"></a>

```go
func ServiceDetails() DevopsagentServiceServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a>

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags"></a>

```go
func Tags() DevopsagentServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a>

---

##### `ExchangeUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="ExchangeUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput"></a>

```go
func ExchangeUrlPrivateConnectionNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `PrivateConnectionNameInput`<sup>Optional</sup> <a name="PrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput"></a>

```go
func PrivateConnectionNameInput() *string
```

- *Type:* *string

---

##### `ServiceDetailsInput`<sup>Optional</sup> <a name="ServiceDetailsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput"></a>

```go
func ServiceDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="TargetUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput"></a>

```go
func TargetUrlPrivateConnectionNameInput() *string
```

- *Type:* *string

---

##### `ExchangeUrlPrivateConnectionName`<sup>Required</sup> <a name="ExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```go
func ExchangeUrlPrivateConnectionName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName"></a>

```go
func PrivateConnectionName() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `TargetUrlPrivateConnectionName`<sup>Required</sup> <a name="TargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName"></a>

```go
func TargetUrlPrivateConnectionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentServiceAdditionalServiceDetails <a name="DevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetails {

}
```


### DevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsAzureIdentity {

}
```


### DevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsDynatrace {

}
```


### DevopsagentServiceAdditionalServiceDetailsGitLab <a name="DevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsGitLab {

}
```


### DevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsMcpServer {

}
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana {

}
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic {

}
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 {

}
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk {

}
```


### DevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsPagerDuty {

}
```


### DevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceAdditionalServiceDetailsServiceNow {

}
```


### DevopsagentServiceConfig <a name="DevopsagentServiceConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceType: *string,
	ExchangeUrlPrivateConnectionName: *string,
	KmsKeyArn: *string,
	PrivateConnectionName: *string,
	ServiceDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetails,
	Tags: interface{},
	TargetUrlPrivateConnectionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType">ServiceType</a></code> | <code>*string</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName">ExchangeUrlPrivateConnectionName</a></code> | <code>*string</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails">ServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName">TargetUrlPrivateConnectionName</a></code> | <code>*string</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType"></a>

```go
ServiceType *string
```

- *Type:* *string

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `ExchangeUrlPrivateConnectionName`<sup>Optional</sup> <a name="ExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName"></a>

```go
ExchangeUrlPrivateConnectionName *string
```

- *Type:* *string

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `PrivateConnectionName`<sup>Optional</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName"></a>

```go
PrivateConnectionName *string
```

- *Type:* *string

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `ServiceDetails`<sup>Optional</sup> <a name="ServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails"></a>

```go
ServiceDetails DevopsagentServiceServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `TargetUrlPrivateConnectionName`<sup>Optional</sup> <a name="TargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName"></a>

```go
TargetUrlPrivateConnectionName *string
```

- *Type:* *string

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

### DevopsagentServiceServiceDetails <a name="DevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetails {
	AzureIdentity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity,
	Dynatrace: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace,
	GitLab: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab,
	McpServer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer,
	McpServerGrafana: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana,
	McpServerNewRelic: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic,
	McpServerSigV4: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4,
	McpServerSplunk: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk,
	PagerDuty: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty,
	ServiceNow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity">AzureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | Azure Identity service configuration for federated identity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | Dynatrace service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | GitLab service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | New Relic service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | PagerDuty service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | ServiceNow service configuration. |

---

##### `AzureIdentity`<sup>Optional</sup> <a name="AzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity"></a>

```go
AzureIdentity DevopsagentServiceServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

Azure Identity service configuration for federated identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}

---

##### `Dynatrace`<sup>Optional</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace"></a>

```go
Dynatrace DevopsagentServiceServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

Dynatrace service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}

---

##### `GitLab`<sup>Optional</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab"></a>

```go
GitLab DevopsagentServiceServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

GitLab service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}

---

##### `McpServer`<sup>Optional</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer"></a>

```go
McpServer DevopsagentServiceServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}

---

##### `McpServerGrafana`<sup>Optional</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana"></a>

```go
McpServerGrafana DevopsagentServiceServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}

---

##### `McpServerNewRelic`<sup>Optional</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic"></a>

```go
McpServerNewRelic DevopsagentServiceServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

New Relic service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}

---

##### `McpServerSigV4`<sup>Optional</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4"></a>

```go
McpServerSigV4 DevopsagentServiceServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}

---

##### `McpServerSplunk`<sup>Optional</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk"></a>

```go
McpServerSplunk DevopsagentServiceServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}

---

##### `PagerDuty`<sup>Optional</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty"></a>

```go
PagerDuty DevopsagentServiceServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

PagerDuty service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow"></a>

```go
ServiceNow DevopsagentServiceServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

ServiceNow service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}

---

### DevopsagentServiceServiceDetailsAzureIdentity <a name="DevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsAzureIdentity {
	ClientId: *string,
	TenantId: *string,
	WebIdentityRoleArn: *string,
	WebIdentityTokenAudiences: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId">ClientId</a></code> | <code>*string</code> | Azure AD application client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure AD tenant ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn">WebIdentityRoleArn</a></code> | <code>*string</code> | ARN of the IAM role for web identity token exchange. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences">WebIdentityTokenAudiences</a></code> | <code>*[]*string</code> | List of audiences for the web identity token. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Azure AD application client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure AD tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}

---

##### `WebIdentityRoleArn`<sup>Optional</sup> <a name="WebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn"></a>

```go
WebIdentityRoleArn *string
```

- *Type:* *string

ARN of the IAM role for web identity token exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}

---

##### `WebIdentityTokenAudiences`<sup>Optional</sup> <a name="WebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences"></a>

```go
WebIdentityTokenAudiences *[]*string
```

- *Type:* *[]*string

List of audiences for the web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}

---

### DevopsagentServiceServiceDetailsDynatrace <a name="DevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsDynatrace {
	AccountUrn: *string,
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn">AccountUrn</a></code> | <code>*string</code> | Dynatrace resource account URN. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | Dynatrace OAuth authorization configuration. |

---

##### `AccountUrn`<sup>Optional</sup> <a name="AccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn"></a>

```go
AccountUrn *string
```

- *Type:* *string

Dynatrace resource account URN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

Dynatrace OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig {
	OAuthClientCredentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `OAuthClientCredentials`<sup>Optional</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials"></a>

```go
OAuthClientCredentials DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials {
	ClientId: *string,
	ClientName: *string,
	ClientSecret: *string,
	ExchangeParameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName">ClientName</a></code> | <code>*string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | OAuth token exchange parameters. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `ClientName`<sup>Optional</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `ExchangeParameters`<sup>Optional</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```go
ExchangeParameters *string
```

- *Type:* *string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsGitLab <a name="DevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsGitLab {
	GroupId: *string,
	TargetUrl: *string,
	TokenType: *string,
	TokenValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId">GroupId</a></code> | <code>*string</code> | Optional GitLab group ID for group-level access tokens. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | GitLab instance URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType">TokenType</a></code> | <code>*string</code> | Type of GitLab access token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue">TokenValue</a></code> | <code>*string</code> | GitLab access token value. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Optional GitLab group ID for group-level access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

GitLab instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue"></a>

```go
TokenValue *string
```

- *Type:* *string

GitLab access token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServer <a name="DevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServer {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig,
	Description: *string,
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description">Description</a></code> | <code>*string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name">Name</a></code> | <code>*string</code> | MCP server name. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name"></a>

```go
Name *string
```

- *Type:* *string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig {
	ApiKey: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey,
	BearerToken: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken,
	OAuthClientCredentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | API key authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | MCP server OAuth client credentials configuration. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey"></a>

```go
ApiKey DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

API key authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken"></a>

```go
BearerToken DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `OAuthClientCredentials`<sup>Optional</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials"></a>

```go
OAuthClientCredentials DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

MCP server OAuth client credentials configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey {
	ApiKeyHeader: *string,
	ApiKeyName: *string,
	ApiKeyValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>*string</code> | HTTP header name to send the API key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName">ApiKeyName</a></code> | <code>*string</code> | User friendly API key name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue">ApiKeyValue</a></code> | <code>*string</code> | API key value. |

---

##### `ApiKeyHeader`<sup>Optional</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader"></a>

```go
ApiKeyHeader *string
```

- *Type:* *string

HTTP header name to send the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}

---

##### `ApiKeyName`<sup>Optional</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName"></a>

```go
ApiKeyName *string
```

- *Type:* *string

User friendly API key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}

---

##### `ApiKeyValue`<sup>Optional</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue"></a>

```go
ApiKeyValue *string
```

- *Type:* *string

API key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken {
	AuthorizationHeader: *string,
	TokenName: *string,
	TokenValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName">TokenName</a></code> | <code>*string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue">TokenValue</a></code> | <code>*string</code> | Bearer token value. |

---

##### `AuthorizationHeader`<sup>Optional</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```go
AuthorizationHeader *string
```

- *Type:* *string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName"></a>

```go
TokenName *string
```

- *Type:* *string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue"></a>

```go
TokenValue *string
```

- *Type:* *string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials {
	ClientId: *string,
	ClientName: *string,
	ClientSecret: *string,
	ExchangeParameters: *string,
	ExchangeUrl: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName">ClientName</a></code> | <code>*string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | OAuth token exchange parameters. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl">ExchangeUrl</a></code> | <code>*string</code> | OAuth token exchange URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes">Scopes</a></code> | <code>*[]*string</code> | OAuth scopes. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `ClientName`<sup>Optional</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `ExchangeParameters`<sup>Optional</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```go
ExchangeParameters *string
```

- *Type:* *string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `ExchangeUrl`<sup>Optional</sup> <a name="ExchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl"></a>

```go
ExchangeUrl *string
```

- *Type:* *string

OAuth token exchange URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsMcpServerGrafana <a name="DevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerGrafana {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig,
	Description: *string,
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | Grafana MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description">Description</a></code> | <code>*string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name">Name</a></code> | <code>*string</code> | MCP server name. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

Grafana MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name"></a>

```go
Name *string
```

- *Type:* *string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig {
	BearerToken: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken"></a>

```go
BearerToken DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken {
	AuthorizationHeader: *string,
	TokenName: *string,
	TokenValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName">TokenName</a></code> | <code>*string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue">TokenValue</a></code> | <code>*string</code> | Bearer token value. |

---

##### `AuthorizationHeader`<sup>Optional</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```go
AuthorizationHeader *string
```

- *Type:* *string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName"></a>

```go
TokenName *string
```

- *Type:* *string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue"></a>

```go
TokenValue *string
```

- *Type:* *string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerNewRelic {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | New Relic authorization configuration. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

New Relic authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig {
	ApiKey: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | New Relic API key configuration. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey"></a>

```go
ApiKey DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

New Relic API key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey {
	AccountId: *string,
	AlertPolicyIds: *[]*string,
	ApiKey: *string,
	ApplicationIds: *[]*string,
	EntityGuids: *[]*string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId">AccountId</a></code> | <code>*string</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds">AlertPolicyIds</a></code> | <code>*[]*string</code> | List of alert policy IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | New Relic User API Key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds">ApplicationIds</a></code> | <code>*[]*string</code> | List of monitored APM application IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | List of globally unique IDs for New Relic resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region">Region</a></code> | <code>*string</code> | New Relic region. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}

---

##### `AlertPolicyIds`<sup>Optional</sup> <a name="AlertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds"></a>

```go
AlertPolicyIds *[]*string
```

- *Type:* *[]*string

List of alert policy IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

New Relic User API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `ApplicationIds`<sup>Optional</sup> <a name="ApplicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds"></a>

```go
ApplicationIds *[]*string
```

- *Type:* *[]*string

List of monitored APM application IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}

---

##### `EntityGuids`<sup>Optional</sup> <a name="EntityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids"></a>

```go
EntityGuids *[]*string
```

- *Type:* *[]*string

List of globally unique IDs for New Relic resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region"></a>

```go
Region *string
```

- *Type:* *string

New Relic region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerSigV4 {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig,
	Description: *string,
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | SigV4 authorization configuration for MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description">Description</a></code> | <code>*string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name">Name</a></code> | <code>*string</code> | MCP server name. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

SigV4 authorization configuration for MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name"></a>

```go
Name *string
```

- *Type:* *string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig {
	CustomHeaders: *map[string]*string,
	McpRoleArn: *string,
	Region: *string,
	RoleArn: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders">CustomHeaders</a></code> | <code>*map[string]*string</code> | Custom headers for the SigV4 MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn">McpRoleArn</a></code> | <code>*string</code> | IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region">Region</a></code> | <code>*string</code> | AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service">Service</a></code> | <code>*string</code> | AWS service name for SigV4 signing. |

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders"></a>

```go
CustomHeaders *map[string]*string
```

- *Type:* *map[string]*string

Custom headers for the SigV4 MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}

---

##### `McpRoleArn`<sup>Optional</sup> <a name="McpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn"></a>

```go
McpRoleArn *string
```

- *Type:* *string

IAM role ARN to assume for SigV4 signing.

Optional - when omitted, credentials are resolved at runtime via a monitor account association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#mcp_role_arn DevopsagentService#mcp_role_arn}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

AWS service name for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#service DevopsagentService#service}

---

### DevopsagentServiceServiceDetailsMcpServerSplunk <a name="DevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerSplunk {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig,
	Description: *string,
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | MCP server splunk authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description">Description</a></code> | <code>*string</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name">Name</a></code> | <code>*string</code> | MCP server name. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

MCP server splunk authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name"></a>

```go
Name *string
```

- *Type:* *string

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig {
	BearerToken: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken"></a>

```go
BearerToken DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken {
	AuthorizationHeader: *string,
	TokenName: *string,
	TokenValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName">TokenName</a></code> | <code>*string</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue">TokenValue</a></code> | <code>*string</code> | Bearer token value. |

---

##### `AuthorizationHeader`<sup>Optional</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```go
AuthorizationHeader *string
```

- *Type:* *string

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `TokenName`<sup>Optional</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName"></a>

```go
TokenName *string
```

- *Type:* *string

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `TokenValue`<sup>Optional</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue"></a>

```go
TokenValue *string
```

- *Type:* *string

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsPagerDuty <a name="DevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsPagerDuty {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | PagerDuty OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes">Scopes</a></code> | <code>*[]*string</code> | PagerDuty scopes. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

PagerDuty OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

PagerDuty scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig {
	OAuthClientCredentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `OAuthClientCredentials`<sup>Optional</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials"></a>

```go
OAuthClientCredentials DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials {
	ClientId: *string,
	ClientName: *string,
	ClientSecret: *string,
	ExchangeParameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName">ClientName</a></code> | <code>*string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | OAuth token exchange parameters. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `ClientName`<sup>Optional</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `ExchangeParameters`<sup>Optional</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```go
ExchangeParameters *string
```

- *Type:* *string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsServiceNow <a name="DevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsServiceNow {
	AuthorizationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig,
	InstanceUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | ServiceNow OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | ServiceNow instance URL. |

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig"></a>

```go
AuthorizationConfig DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

ServiceNow OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `InstanceUrl`<sup>Optional</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl"></a>

```go
InstanceUrl *string
```

- *Type:* *string

ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig {
	OAuthClientCredentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `OAuthClientCredentials`<sup>Optional</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials"></a>

```go
OAuthClientCredentials DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials {
	ClientId: *string,
	ClientName: *string,
	ClientSecret: *string,
	ExchangeParameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName">ClientName</a></code> | <code>*string</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | OAuth token exchange parameters. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `ClientName`<sup>Optional</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `ExchangeParameters`<sup>Optional</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```go
ExchangeParameters *string
```

- *Type:* *string

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceTags <a name="DevopsagentServiceTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

&devopsagentservice.DevopsagentServiceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#key DevopsagentService#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_service#value DevopsagentService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">WebIdentityRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">WebIdentityTokenAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `WebIdentityRoleArn`<sup>Required</sup> <a name="WebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```go
func WebIdentityRoleArn() *string
```

- *Type:* *string

---

##### `WebIdentityTokenAudiences`<sup>Required</sup> <a name="WebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```go
func WebIdentityTokenAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">AccountUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountUrn`<sup>Required</sup> <a name="AccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```go
func AccountUrn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```go
func AuthorizationMethod() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```go
func ApiKeyHeader() *string
```

- *Type:* *string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```go
func AuthorizationMethod() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">CustomHeaders</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">McpRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```go
func CustomHeaders() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `McpRoleArn`<sup>Required</sup> <a name="McpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```go
func McpRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">AuthorizationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```go
func ApiKeyHeader() *string
```

- *Type:* *string

---

##### `AuthorizationMethod`<sup>Required</sup> <a name="AuthorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```go
func AuthorizationMethod() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">AzureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureIdentity`<sup>Required</sup> <a name="AzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```go
func AzureIdentity() DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```go
func Dynatrace() DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```go
func GitLab() DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```go
func McpServer() DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```go
func McpServerGrafana() DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```go
func McpServerNewRelic() DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```go
func McpServerSigV4() DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```go
func McpServerSplunk() DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```go
func PagerDuty() DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a>

---


### DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsagentServiceAdditionalServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsAzureIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsAzureIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn">ResetWebIdentityRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences">ResetWebIdentityTokenAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetWebIdentityRoleArn` <a name="ResetWebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn"></a>

```go
func ResetWebIdentityRoleArn()
```

##### `ResetWebIdentityTokenAudiences` <a name="ResetWebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences"></a>

```go
func ResetWebIdentityTokenAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput">WebIdentityRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput">WebIdentityTokenAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">WebIdentityRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">WebIdentityTokenAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `WebIdentityRoleArnInput`<sup>Optional</sup> <a name="WebIdentityRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput"></a>

```go
func WebIdentityRoleArnInput() *string
```

- *Type:* *string

---

##### `WebIdentityTokenAudiencesInput`<sup>Optional</sup> <a name="WebIdentityTokenAudiencesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput"></a>

```go
func WebIdentityTokenAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `WebIdentityRoleArn`<sup>Required</sup> <a name="WebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```go
func WebIdentityRoleArn() *string
```

- *Type:* *string

---

##### `WebIdentityTokenAudiences`<sup>Required</sup> <a name="WebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```go
func WebIdentityTokenAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">ResetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">ResetExchangeParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientName` <a name="ResetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```go
func ResetClientName()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetExchangeParameters` <a name="ResetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```go
func ResetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">ExchangeParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ExchangeParametersInput`<sup>Optional</sup> <a name="ExchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```go
func ExchangeParametersInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```go
func ExchangeParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials">PutOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials">ResetOAuthClientCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOAuthClientCredentials` <a name="PutOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```go
func PutOAuthClientCredentials(value DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `ResetOAuthClientCredentials` <a name="ResetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```go
func ResetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">OAuthClientCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```go
func OAuthClientCredentials() DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `OAuthClientCredentialsInput`<sup>Optional</sup> <a name="OAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```go
func OAuthClientCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsDynatraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsDynatraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn">ResetAccountUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `ResetAccountUrn` <a name="ResetAccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn"></a>

```go
func ResetAccountUrn()
```

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput">AccountUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">AccountUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `AccountUrnInput`<sup>Optional</sup> <a name="AccountUrnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput"></a>

```go
func AccountUrnInput() *string
```

- *Type:* *string

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AccountUrn`<sup>Required</sup> <a name="AccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```go
func AccountUrn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsGitLabOutputReference <a name="DevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsGitLabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsGitLabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue">ResetTokenValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType"></a>

```go
func ResetTokenType()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue"></a>

```go
func ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput"></a>

```go
func TokenValueInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader">ResetApiKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName">ResetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue">ResetApiKeyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyHeader` <a name="ResetApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader"></a>

```go
func ResetApiKeyHeader()
```

##### `ResetApiKeyName` <a name="ResetApiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName"></a>

```go
func ResetApiKeyName()
```

##### `ResetApiKeyValue` <a name="ResetApiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue"></a>

```go
func ResetApiKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput">ApiKeyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput">ApiKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput">ApiKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">ApiKeyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">ApiKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">ApiKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyHeaderInput`<sup>Optional</sup> <a name="ApiKeyHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput"></a>

```go
func ApiKeyHeaderInput() *string
```

- *Type:* *string

---

##### `ApiKeyNameInput`<sup>Optional</sup> <a name="ApiKeyNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput"></a>

```go
func ApiKeyNameInput() *string
```

- *Type:* *string

---

##### `ApiKeyValueInput`<sup>Optional</sup> <a name="ApiKeyValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput"></a>

```go
func ApiKeyValueInput() *string
```

- *Type:* *string

---

##### `ApiKeyHeader`<sup>Required</sup> <a name="ApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```go
func ApiKeyHeader() *string
```

- *Type:* *string

---

##### `ApiKeyName`<sup>Required</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```go
func ApiKeyName() *string
```

- *Type:* *string

---

##### `ApiKeyValue`<sup>Required</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```go
func ApiKeyValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">ResetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName">ResetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue">ResetTokenValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationHeader` <a name="ResetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```go
func ResetAuthorizationHeader()
```

##### `ResetTokenName` <a name="ResetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```go
func ResetTokenName()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```go
func ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">AuthorizationHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">TokenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationHeaderInput`<sup>Optional</sup> <a name="AuthorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```go
func AuthorizationHeaderInput() *string
```

- *Type:* *string

---

##### `TokenNameInput`<sup>Optional</sup> <a name="TokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```go
func TokenNameInput() *string
```

- *Type:* *string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```go
func TokenValueInput() *string
```

- *Type:* *string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```go
func AuthorizationHeader() *string
```

- *Type:* *string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```go
func TokenName() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">ResetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">ResetExchangeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl">ResetExchangeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientName` <a name="ResetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```go
func ResetClientName()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetExchangeParameters` <a name="ResetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```go
func ResetExchangeParameters()
```

##### `ResetExchangeUrl` <a name="ResetExchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl"></a>

```go
func ResetExchangeUrl()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">ExchangeParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput">ExchangeUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">ExchangeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ExchangeParametersInput`<sup>Optional</sup> <a name="ExchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```go
func ExchangeParametersInput() *string
```

- *Type:* *string

---

##### `ExchangeUrlInput`<sup>Optional</sup> <a name="ExchangeUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput"></a>

```go
func ExchangeUrlInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```go
func ExchangeParameters() *string
```

- *Type:* *string

---

##### `ExchangeUrl`<sup>Required</sup> <a name="ExchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```go
func ExchangeUrl() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken">PutBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials">PutOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken">ResetBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials">ResetOAuthClientCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey"></a>

```go
func PutApiKey(value DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `PutBearerToken` <a name="PutBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken"></a>

```go
func PutBearerToken(value DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `PutOAuthClientCredentials` <a name="PutOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```go
func PutOAuthClientCredentials(value DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBearerToken` <a name="ResetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken"></a>

```go
func ResetBearerToken()
```

##### `ResetOAuthClientCredentials` <a name="ResetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```go
func ResetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput">BearerTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">OAuthClientCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```go
func BearerToken() DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```go
func OAuthClientCredentials() DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BearerTokenInput`<sup>Optional</sup> <a name="BearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```go
func BearerTokenInput() interface{}
```

- *Type:* interface{}

---

##### `OAuthClientCredentialsInput`<sup>Optional</sup> <a name="OAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```go
func OAuthClientCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">ResetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName">ResetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue">ResetTokenValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationHeader` <a name="ResetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```go
func ResetAuthorizationHeader()
```

##### `ResetTokenName` <a name="ResetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```go
func ResetTokenName()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```go
func ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">AuthorizationHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">TokenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationHeaderInput`<sup>Optional</sup> <a name="AuthorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```go
func AuthorizationHeaderInput() *string
```

- *Type:* *string

---

##### `TokenNameInput`<sup>Optional</sup> <a name="TokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```go
func TokenNameInput() *string
```

- *Type:* *string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```go
func TokenValueInput() *string
```

- *Type:* *string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```go
func AuthorizationHeader() *string
```

- *Type:* *string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```go
func TokenName() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken">PutBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken">ResetBearerToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBearerToken` <a name="PutBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken"></a>

```go
func PutBearerToken(value DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `ResetBearerToken` <a name="ResetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken"></a>

```go
func ResetBearerToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput">BearerTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```go
func BearerToken() DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `BearerTokenInput`<sup>Optional</sup> <a name="BearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```go
func BearerTokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds">ResetAlertPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds">ResetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids">ResetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAlertPolicyIds` <a name="ResetAlertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds"></a>

```go
func ResetAlertPolicyIds()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetApplicationIds` <a name="ResetApplicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds"></a>

```go
func ResetApplicationIds()
```

##### `ResetEntityGuids` <a name="ResetEntityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids"></a>

```go
func ResetEntityGuids()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput">AlertPolicyIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput">ApplicationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput">EntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">AlertPolicyIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">ApplicationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AlertPolicyIdsInput`<sup>Optional</sup> <a name="AlertPolicyIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput"></a>

```go
func AlertPolicyIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApplicationIdsInput`<sup>Optional</sup> <a name="ApplicationIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput"></a>

```go
func ApplicationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntityGuidsInput`<sup>Optional</sup> <a name="EntityGuidsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput"></a>

```go
func EntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AlertPolicyIds`<sup>Required</sup> <a name="AlertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```go
func AlertPolicyIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApplicationIds`<sup>Required</sup> <a name="ApplicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```go
func ApplicationIds() *[]*string
```

- *Type:* *[]*string

---

##### `EntityGuids`<sup>Required</sup> <a name="EntityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```go
func EntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey"></a>

```go
func PutApiKey(value DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn">ResetMcpRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders"></a>

```go
func ResetCustomHeaders()
```

##### `ResetMcpRoleArn` <a name="ResetMcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn"></a>

```go
func ResetMcpRoleArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput">CustomHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput">McpRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">CustomHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">McpRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput"></a>

```go
func CustomHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `McpRoleArnInput`<sup>Optional</sup> <a name="McpRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput"></a>

```go
func McpRoleArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```go
func CustomHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `McpRoleArn`<sup>Required</sup> <a name="McpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```go
func McpRoleArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">ResetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName">ResetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue">ResetTokenValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationHeader` <a name="ResetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```go
func ResetAuthorizationHeader()
```

##### `ResetTokenName` <a name="ResetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```go
func ResetTokenName()
```

##### `ResetTokenValue` <a name="ResetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```go
func ResetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">AuthorizationHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">TokenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">TokenValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">AuthorizationHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">TokenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">TokenValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationHeaderInput`<sup>Optional</sup> <a name="AuthorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```go
func AuthorizationHeaderInput() *string
```

- *Type:* *string

---

##### `TokenNameInput`<sup>Optional</sup> <a name="TokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```go
func TokenNameInput() *string
```

- *Type:* *string

---

##### `TokenValueInput`<sup>Optional</sup> <a name="TokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```go
func TokenValueInput() *string
```

- *Type:* *string

---

##### `AuthorizationHeader`<sup>Required</sup> <a name="AuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```go
func AuthorizationHeader() *string
```

- *Type:* *string

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```go
func TokenName() *string
```

- *Type:* *string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```go
func TokenValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken">PutBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken">ResetBearerToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBearerToken` <a name="PutBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken"></a>

```go
func PutBearerToken(value DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `ResetBearerToken` <a name="ResetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken"></a>

```go
func ResetBearerToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">BearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput">BearerTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```go
func BearerToken() DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `BearerTokenInput`<sup>Optional</sup> <a name="BearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```go
func BearerTokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsOutputReference <a name="DevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity">PutAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace">PutDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab">PutGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer">PutMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana">PutMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic">PutMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4">PutMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk">PutMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty">PutPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity">ResetAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace">ResetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab">ResetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer">ResetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana">ResetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic">ResetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4">ResetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk">ResetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty">ResetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureIdentity` <a name="PutAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity"></a>

```go
func PutAzureIdentity(value DevopsagentServiceServiceDetailsAzureIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `PutDynatrace` <a name="PutDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace"></a>

```go
func PutDynatrace(value DevopsagentServiceServiceDetailsDynatrace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `PutGitLab` <a name="PutGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab"></a>

```go
func PutGitLab(value DevopsagentServiceServiceDetailsGitLab)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `PutMcpServer` <a name="PutMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer"></a>

```go
func PutMcpServer(value DevopsagentServiceServiceDetailsMcpServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `PutMcpServerGrafana` <a name="PutMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana"></a>

```go
func PutMcpServerGrafana(value DevopsagentServiceServiceDetailsMcpServerGrafana)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `PutMcpServerNewRelic` <a name="PutMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic"></a>

```go
func PutMcpServerNewRelic(value DevopsagentServiceServiceDetailsMcpServerNewRelic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `PutMcpServerSigV4` <a name="PutMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4"></a>

```go
func PutMcpServerSigV4(value DevopsagentServiceServiceDetailsMcpServerSigV4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `PutMcpServerSplunk` <a name="PutMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk"></a>

```go
func PutMcpServerSplunk(value DevopsagentServiceServiceDetailsMcpServerSplunk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `PutPagerDuty` <a name="PutPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty"></a>

```go
func PutPagerDuty(value DevopsagentServiceServiceDetailsPagerDuty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value DevopsagentServiceServiceDetailsServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `ResetAzureIdentity` <a name="ResetAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity"></a>

```go
func ResetAzureIdentity()
```

##### `ResetDynatrace` <a name="ResetDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace"></a>

```go
func ResetDynatrace()
```

##### `ResetGitLab` <a name="ResetGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab"></a>

```go
func ResetGitLab()
```

##### `ResetMcpServer` <a name="ResetMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer"></a>

```go
func ResetMcpServer()
```

##### `ResetMcpServerGrafana` <a name="ResetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana"></a>

```go
func ResetMcpServerGrafana()
```

##### `ResetMcpServerNewRelic` <a name="ResetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic"></a>

```go
func ResetMcpServerNewRelic()
```

##### `ResetMcpServerSigV4` <a name="ResetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4"></a>

```go
func ResetMcpServerSigV4()
```

##### `ResetMcpServerSplunk` <a name="ResetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk"></a>

```go
func ResetMcpServerSplunk()
```

##### `ResetPagerDuty` <a name="ResetPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty"></a>

```go
func ResetPagerDuty()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">AzureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput">AzureIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput">DynatraceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput">GitLabInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput">McpServerGrafanaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput">McpServerNewRelicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input">McpServerSigV4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput">McpServerSplunkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput">PagerDutyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureIdentity`<sup>Required</sup> <a name="AzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```go
func AzureIdentity() DevopsagentServiceServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```go
func Dynatrace() DevopsagentServiceServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```go
func GitLab() DevopsagentServiceServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```go
func McpServer() DevopsagentServiceServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```go
func McpServerGrafana() DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```go
func McpServerNewRelic() DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```go
func McpServerSigV4() DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```go
func McpServerSplunk() DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```go
func PagerDuty() DevopsagentServiceServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DevopsagentServiceServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `AzureIdentityInput`<sup>Optional</sup> <a name="AzureIdentityInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput"></a>

```go
func AzureIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `DynatraceInput`<sup>Optional</sup> <a name="DynatraceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput"></a>

```go
func DynatraceInput() interface{}
```

- *Type:* interface{}

---

##### `GitLabInput`<sup>Optional</sup> <a name="GitLabInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput"></a>

```go
func GitLabInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerGrafanaInput`<sup>Optional</sup> <a name="McpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput"></a>

```go
func McpServerGrafanaInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput"></a>

```go
func McpServerInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerNewRelicInput`<sup>Optional</sup> <a name="McpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput"></a>

```go
func McpServerNewRelicInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerSigV4Input`<sup>Optional</sup> <a name="McpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input"></a>

```go
func McpServerSigV4Input() interface{}
```

- *Type:* interface{}

---

##### `McpServerSplunkInput`<sup>Optional</sup> <a name="McpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput"></a>

```go
func McpServerSplunkInput() interface{}
```

- *Type:* interface{}

---

##### `PagerDutyInput`<sup>Optional</sup> <a name="PagerDutyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput"></a>

```go
func PagerDutyInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">ResetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">ResetExchangeParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientName` <a name="ResetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```go
func ResetClientName()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetExchangeParameters` <a name="ResetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```go
func ResetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">ExchangeParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ExchangeParametersInput`<sup>Optional</sup> <a name="ExchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```go
func ExchangeParametersInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```go
func ExchangeParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials">PutOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials">ResetOAuthClientCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOAuthClientCredentials` <a name="PutOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```go
func PutOAuthClientCredentials(value DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `ResetOAuthClientCredentials` <a name="ResetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```go
func ResetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">OAuthClientCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```go
func OAuthClientCredentials() DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `OAuthClientCredentialsInput`<sup>Optional</sup> <a name="OAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```go
func OAuthClientCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsPagerDutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsPagerDutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">ResetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">ResetExchangeParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientName` <a name="ResetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```go
func ResetClientName()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetExchangeParameters` <a name="ResetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```go
func ResetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">ExchangeParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">ExchangeParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ExchangeParametersInput`<sup>Optional</sup> <a name="ExchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```go
func ExchangeParametersInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ExchangeParameters`<sup>Required</sup> <a name="ExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```go
func ExchangeParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials">PutOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials">ResetOAuthClientCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOAuthClientCredentials` <a name="PutOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```go
func PutOAuthClientCredentials(value DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `ResetOAuthClientCredentials` <a name="ResetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```go
func ResetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">OAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">OAuthClientCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OAuthClientCredentials`<sup>Required</sup> <a name="OAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```go
func OAuthClientCredentials() DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `OAuthClientCredentialsInput`<sup>Optional</sup> <a name="OAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```go
func OAuthClientCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceServiceDetailsServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentServiceServiceDetailsServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl">ResetInstanceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetInstanceUrl` <a name="ResetInstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl"></a>

```go
func ResetInstanceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput"></a>

```go
func InstanceUrlInput() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceTagsList <a name="DevopsagentServiceTagsList" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentServiceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get"></a>

```go
func Get(index *f64) DevopsagentServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentServiceTagsOutputReference <a name="DevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentservice"

devopsagentservice.NewDevopsagentServiceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentServiceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



