# `securityagentPrivateConnection` Submodule <a name="`securityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.securityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentPrivateConnection <a name="SecurityagentPrivateConnection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnection(scope Construct, id *string, config SecurityagentPrivateConnectionConfig) SecurityagentPrivateConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode">PutMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMode` <a name="PutMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode"></a>

```go
func PutMode(value SecurityagentPrivateConnectionMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode"></a>

```go
func ResetMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.SecurityagentPrivateConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.SecurityagentPrivateConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.SecurityagentPrivateConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.SecurityagentPrivateConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime">CertificateExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress">HostAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode">Mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput">ModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput">PrivateConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateExpiryTime`<sup>Required</sup> <a name="CertificateExpiryTime" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```go
func CertificateExpiryTime() *string
```

- *Type:* *string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution"></a>

```go
func DnsResolution() *string
```

- *Type:* *string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress"></a>

```go
func HostAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode"></a>

```go
func Mode() SecurityagentPrivateConnectionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a>

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId"></a>

```go
func ResourceGatewayId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags"></a>

```go
func Tags() SecurityagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput"></a>

```go
func ModeInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateConnectionNameInput`<sup>Optional</sup> <a name="PrivateConnectionNameInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput"></a>

```go
func PrivateConnectionNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName"></a>

```go
func PrivateConnectionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentPrivateConnectionConfig <a name="SecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

&securityagentprivateconnection.SecurityagentPrivateConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PrivateConnectionName: *string,
	Certificate: *string,
	Mode: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentPrivateConnection.SecurityagentPrivateConnectionMode,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate">Certificate</a></code> | <code>*string</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode">Mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags attached to the private connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName"></a>

```go
PrivateConnectionName *string
```

- *Type:* *string

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode"></a>

```go
Mode SecurityagentPrivateConnectionMode
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

### SecurityagentPrivateConnectionMode <a name="SecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

&securityagentprivateconnection.SecurityagentPrivateConnectionMode {
	SelfManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged,
	ServiceManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | The configuration for a self-managed private connection, where you manage your own resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle. |

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged"></a>

```go
SelfManaged SecurityagentPrivateConnectionModeSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

##### `ServiceManaged`<sup>Optional</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged"></a>

```go
ServiceManaged SecurityagentPrivateConnectionModeServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

### SecurityagentPrivateConnectionModeSelfManaged <a name="SecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

&securityagentprivateconnection.SecurityagentPrivateConnectionModeSelfManaged {
	ResourceConfigurationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | The identifier or ARN of the resource configuration. |

---

##### `ResourceConfigurationId`<sup>Optional</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId"></a>

```go
ResourceConfigurationId *string
```

- *Type:* *string

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

### SecurityagentPrivateConnectionModeServiceManaged <a name="SecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

&securityagentprivateconnection.SecurityagentPrivateConnectionModeServiceManaged {
	DnsResolution: *string,
	HostAddress: *string,
	IpAddressType: *string,
	Ipv4AddressesPerEni: *f64,
	PortRanges: *[]*string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | The DNS resolution mode for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress">HostAddress</a></code> | <code>*string</code> | The IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | The IP address type of the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | The TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The security groups to attach to the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The subnets that the service-managed resource gateway spans. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId">VpcId</a></code> | <code>*string</code> | The VPC to create the service-managed resource gateway in. |

---

##### `DnsResolution`<sup>Optional</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution"></a>

```go
DnsResolution *string
```

- *Type:* *string

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

##### `HostAddress`<sup>Optional</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress"></a>

```go
HostAddress *string
```

- *Type:* *string

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni"></a>

```go
Ipv4AddressesPerEni *f64
```

- *Type:* *f64

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges"></a>

```go
PortRanges *[]*string
```

- *Type:* *[]*string

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

### SecurityagentPrivateConnectionTags <a name="SecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

&securityagentprivateconnection.SecurityagentPrivateConnectionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#key SecurityagentPrivateConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#value SecurityagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentPrivateConnectionModeOutputReference <a name="SecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnectionModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentPrivateConnectionModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged">PutServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged">ResetServiceManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged"></a>

```go
func PutSelfManaged(value SecurityagentPrivateConnectionModeSelfManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `PutServiceManaged` <a name="PutServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged"></a>

```go
func PutServiceManaged(value SecurityagentPrivateConnectionModeServiceManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged"></a>

```go
func ResetSelfManaged()
```

##### `ResetServiceManaged` <a name="ResetServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged"></a>

```go
func ResetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput">SelfManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput">ServiceManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```go
func SelfManaged() SecurityagentPrivateConnectionModeSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `ServiceManaged`<sup>Required</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```go
func ServiceManaged() SecurityagentPrivateConnectionModeServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput"></a>

```go
func SelfManagedInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceManagedInput`<sup>Optional</sup> <a name="ServiceManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput"></a>

```go
func ServiceManagedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="SecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnectionModeSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentPrivateConnectionModeSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId">ResetResourceConfigurationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationId` <a name="ResetResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId"></a>

```go
func ResetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput">ResourceConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdInput`<sup>Optional</sup> <a name="ResourceConfigurationIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```go
func ResourceConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="SecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnectionModeServiceManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityagentPrivateConnectionModeServiceManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution">ResetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress">ResetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsResolution` <a name="ResetDnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution"></a>

```go
func ResetDnsResolution()
```

##### `ResetHostAddress` <a name="ResetHostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress"></a>

```go
func ResetHostAddress()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```go
func ResetIpv4AddressesPerEni()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput">DnsResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput">HostAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">HostAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsResolutionInput`<sup>Optional</sup> <a name="DnsResolutionInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput"></a>

```go
func DnsResolutionInput() *string
```

- *Type:* *string

---

##### `HostAddressInput`<sup>Optional</sup> <a name="HostAddressInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput"></a>

```go
func HostAddressInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```go
func Ipv4AddressesPerEniInput() *f64
```

- *Type:* *f64

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput"></a>

```go
func PortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```go
func DnsResolution() *string
```

- *Type:* *string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```go
func HostAddress() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```go
func Ipv4AddressesPerEni() *f64
```

- *Type:* *f64

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentPrivateConnectionTagsList <a name="SecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityagentPrivateConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get"></a>

```go
func Get(index *f64) SecurityagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityagentPrivateConnectionTagsOutputReference <a name="SecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/securityagentprivateconnection"

securityagentprivateconnection.NewSecurityagentPrivateConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityagentPrivateConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



