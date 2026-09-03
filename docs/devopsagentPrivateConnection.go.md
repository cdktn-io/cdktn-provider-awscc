# `devopsagentPrivateConnection` Submodule <a name="`devopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.devopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentPrivateConnection <a name="DevopsagentPrivateConnection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnection(scope Construct, id *string, config DevopsagentPrivateConnectionConfig) DevopsagentPrivateConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration">PutConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfiguration` <a name="PutConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration"></a>

```go
func PutConnectionConfiguration(value DevopsagentPrivateConnectionConnectionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.DevopsagentPrivateConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.DevopsagentPrivateConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.DevopsagentPrivateConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.DevopsagentPrivateConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime">CertificateExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput">ConnectionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateExpiryTime`<sup>Required</sup> <a name="CertificateExpiryTime" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```go
func CertificateExpiryTime() *string
```

- *Type:* *string

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration"></a>

```go
func ConnectionConfiguration() DevopsagentPrivateConnectionConnectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags"></a>

```go
func Tags() DevopsagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ConnectionConfigurationInput`<sup>Optional</sup> <a name="ConnectionConfigurationInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput"></a>

```go
func ConnectionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentPrivateConnectionConfig <a name="DevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

&devopsagentprivateconnection.DevopsagentPrivateConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration,
	Name: *string,
	Certificate: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration"></a>

```go
ConnectionConfiguration DevopsagentPrivateConnectionConnectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

### DevopsagentPrivateConnectionConnectionConfiguration <a name="DevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

&devopsagentprivateconnection.DevopsagentPrivateConnectionConnectionConfiguration {
	SelfManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged,
	ServiceManaged: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | Configuration for a self-managed Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | Configuration for a service-managed Private Connection. |

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged"></a>

```go
SelfManaged DevopsagentPrivateConnectionConnectionConfigurationSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

##### `ServiceManaged`<sup>Optional</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged"></a>

```go
ServiceManaged DevopsagentPrivateConnectionConnectionConfigurationServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

### DevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

&devopsagentprivateconnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged {
	ResourceConfigurationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | The ARN of the Resource Configuration. |

---

##### `ResourceConfigurationId`<sup>Optional</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId"></a>

```go
ResourceConfigurationId *string
```

- *Type:* *string

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

### DevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

&devopsagentprivateconnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged {
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
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress">HostAddress</a></code> | <code>*string</code> | IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | IP address type of the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | Number of IPv4 addresses in each ENI for the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Security groups to attach to the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Subnets that the service-managed Resource Gateway will span. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId">VpcId</a></code> | <code>*string</code> | VPC to create the service-managed Resource Gateway in. |

---

##### `DnsResolution`<sup>Optional</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution"></a>

```go
DnsResolution *string
```

- *Type:* *string

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

##### `HostAddress`<sup>Optional</sup> <a name="HostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress"></a>

```go
HostAddress *string
```

- *Type:* *string

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni"></a>

```go
Ipv4AddressesPerEni *f64
```

- *Type:* *f64

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges"></a>

```go
PortRanges *[]*string
```

- *Type:* *[]*string

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

### DevopsagentPrivateConnectionTags <a name="DevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

&devopsagentprivateconnection.DevopsagentPrivateConnectionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#key DevopsagentPrivateConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_private_connection#value DevopsagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnectionConnectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentPrivateConnectionConnectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged">PutServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged">ResetServiceManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged"></a>

```go
func PutSelfManaged(value DevopsagentPrivateConnectionConnectionConfigurationSelfManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `PutServiceManaged` <a name="PutServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged"></a>

```go
func PutServiceManaged(value DevopsagentPrivateConnectionConnectionConfigurationServiceManaged)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged"></a>

```go
func ResetSelfManaged()
```

##### `ResetServiceManaged` <a name="ResetServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged"></a>

```go
func ResetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput">SelfManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput">ServiceManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```go
func SelfManaged() DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `ServiceManaged`<sup>Required</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```go
func ServiceManaged() DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput"></a>

```go
func SelfManagedInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceManagedInput`<sup>Optional</sup> <a name="ServiceManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput"></a>

```go
func ServiceManagedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId">ResetResourceConfigurationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationId` <a name="ResetResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId"></a>

```go
func ResetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput">ResourceConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdInput`<sup>Optional</sup> <a name="ResourceConfigurationIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```go
func ResourceConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution">ResetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress">ResetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsResolution` <a name="ResetDnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution"></a>

```go
func ResetDnsResolution()
```

##### `ResetHostAddress` <a name="ResetHostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress"></a>

```go
func ResetHostAddress()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```go
func ResetIpv4AddressesPerEni()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput">DnsResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput">HostAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">DnsResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">HostAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsResolutionInput`<sup>Optional</sup> <a name="DnsResolutionInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput"></a>

```go
func DnsResolutionInput() *string
```

- *Type:* *string

---

##### `HostAddressInput`<sup>Optional</sup> <a name="HostAddressInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput"></a>

```go
func HostAddressInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```go
func Ipv4AddressesPerEniInput() *f64
```

- *Type:* *f64

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput"></a>

```go
func PortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```go
func DnsResolution() *string
```

- *Type:* *string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```go
func HostAddress() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```go
func Ipv4AddressesPerEni() *f64
```

- *Type:* *f64

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentPrivateConnectionTagsList <a name="DevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentPrivateConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get"></a>

```go
func Get(index *f64) DevopsagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentPrivateConnectionTagsOutputReference <a name="DevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentprivateconnection"

devopsagentprivateconnection.NewDevopsagentPrivateConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentPrivateConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



