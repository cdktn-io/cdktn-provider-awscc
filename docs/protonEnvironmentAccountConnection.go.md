# `protonEnvironmentAccountConnection` Submodule <a name="`protonEnvironmentAccountConnection` Submodule" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonEnvironmentAccountConnection <a name="ProtonEnvironmentAccountConnection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.NewProtonEnvironmentAccountConnection(scope Construct, id *string, config ProtonEnvironmentAccountConnectionConfig) ProtonEnvironmentAccountConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn">ResetCodebuildRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn">ResetComponentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId">ResetEnvironmentAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName">ResetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId">ResetManagementAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCodebuildRoleArn` <a name="ResetCodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn"></a>

```go
func ResetCodebuildRoleArn()
```

##### `ResetComponentRoleArn` <a name="ResetComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn"></a>

```go
func ResetComponentRoleArn()
```

##### `ResetEnvironmentAccountId` <a name="ResetEnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId"></a>

```go
func ResetEnvironmentAccountId()
```

##### `ResetEnvironmentName` <a name="ResetEnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName"></a>

```go
func ResetEnvironmentName()
```

##### `ResetManagementAccountId` <a name="ResetManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId"></a>

```go
func ResetManagementAccountId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.ProtonEnvironmentAccountConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.ProtonEnvironmentAccountConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.ProtonEnvironmentAccountConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.ProtonEnvironmentAccountConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProtonEnvironmentAccountConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProtonEnvironmentAccountConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ProtonEnvironmentAccountConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId">EnvironmentAccountConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput">CodebuildRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput">ComponentRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput">EnvironmentAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput">ManagementAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn">CodebuildRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn">ComponentRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId">EnvironmentAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId">ManagementAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EnvironmentAccountConnectionId`<sup>Required</sup> <a name="EnvironmentAccountConnectionId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId"></a>

```go
func EnvironmentAccountConnectionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags"></a>

```go
func Tags() ProtonEnvironmentAccountConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a>

---

##### `CodebuildRoleArnInput`<sup>Optional</sup> <a name="CodebuildRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput"></a>

```go
func CodebuildRoleArnInput() *string
```

- *Type:* *string

---

##### `ComponentRoleArnInput`<sup>Optional</sup> <a name="ComponentRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput"></a>

```go
func ComponentRoleArnInput() *string
```

- *Type:* *string

---

##### `EnvironmentAccountIdInput`<sup>Optional</sup> <a name="EnvironmentAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput"></a>

```go
func EnvironmentAccountIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput"></a>

```go
func EnvironmentNameInput() *string
```

- *Type:* *string

---

##### `ManagementAccountIdInput`<sup>Optional</sup> <a name="ManagementAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput"></a>

```go
func ManagementAccountIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CodebuildRoleArn`<sup>Required</sup> <a name="CodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn"></a>

```go
func CodebuildRoleArn() *string
```

- *Type:* *string

---

##### `ComponentRoleArn`<sup>Required</sup> <a name="ComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn"></a>

```go
func ComponentRoleArn() *string
```

- *Type:* *string

---

##### `EnvironmentAccountId`<sup>Required</sup> <a name="EnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId"></a>

```go
func EnvironmentAccountId() *string
```

- *Type:* *string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName"></a>

```go
func EnvironmentName() *string
```

- *Type:* *string

---

##### `ManagementAccountId`<sup>Required</sup> <a name="ManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId"></a>

```go
func ManagementAccountId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonEnvironmentAccountConnectionConfig <a name="ProtonEnvironmentAccountConnectionConfig" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

&protonenvironmentaccountconnection.ProtonEnvironmentAccountConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CodebuildRoleArn: *string,
	ComponentRoleArn: *string,
	EnvironmentAccountId: *string,
	EnvironmentName: *string,
	ManagementAccountId: *string,
	RoleArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn">CodebuildRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM service role in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn">ComponentRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId">EnvironmentAccountId</a></code> | <code>*string</code> | The environment account that's connected to the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | The name of the AWS Proton environment that's created in the associated management account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId">ManagementAccountId</a></code> | <code>*string</code> | The ID of the management account that accepts or rejects the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | <p>An optional list of metadata items that you can associate with the Proton environment account connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodebuildRoleArn`<sup>Optional</sup> <a name="CodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn"></a>

```go
CodebuildRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM service role in the environment account.

AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#codebuild_role_arn ProtonEnvironmentAccountConnection#codebuild_role_arn}

---

##### `ComponentRoleArn`<sup>Optional</sup> <a name="ComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn"></a>

```go
ComponentRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.

It determines the scope of infrastructure that a component can provision in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#component_role_arn ProtonEnvironmentAccountConnection#component_role_arn}

---

##### `EnvironmentAccountId`<sup>Optional</sup> <a name="EnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId"></a>

```go
EnvironmentAccountId *string
```

- *Type:* *string

The environment account that's connected to the environment account connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_account_id ProtonEnvironmentAccountConnection#environment_account_id}

---

##### `EnvironmentName`<sup>Optional</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName"></a>

```go
EnvironmentName *string
```

- *Type:* *string

The name of the AWS Proton environment that's created in the associated management account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_name ProtonEnvironmentAccountConnection#environment_name}

---

##### `ManagementAccountId`<sup>Optional</sup> <a name="ManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId"></a>

```go
ManagementAccountId *string
```

- *Type:* *string

The ID of the management account that accepts or rejects the environment account connection.

You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#management_account_id ProtonEnvironmentAccountConnection#management_account_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account.

AWS Proton uses this role to provision infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#role_arn ProtonEnvironmentAccountConnection#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

<p>An optional list of metadata items that you can associate with the Proton environment account connection.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#tags ProtonEnvironmentAccountConnection#tags}

---

### ProtonEnvironmentAccountConnectionTags <a name="ProtonEnvironmentAccountConnectionTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

&protonenvironmentaccountconnection.ProtonEnvironmentAccountConnectionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key">Key</a></code> | <code>*string</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value">Value</a></code> | <code>*string</code> | <p>The value of the resource tag.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#key ProtonEnvironmentAccountConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#value ProtonEnvironmentAccountConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonEnvironmentAccountConnectionTagsList <a name="ProtonEnvironmentAccountConnectionTagsList" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.NewProtonEnvironmentAccountConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProtonEnvironmentAccountConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get"></a>

```go
func Get(index *f64) ProtonEnvironmentAccountConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProtonEnvironmentAccountConnectionTagsOutputReference <a name="ProtonEnvironmentAccountConnectionTagsOutputReference" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/protonenvironmentaccountconnection"

protonenvironmentaccountconnection.NewProtonEnvironmentAccountConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProtonEnvironmentAccountConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



